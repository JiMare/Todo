import api from '@/modules/api/api';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  token: string;
  tokenExpiry: number | null;
  refreshTimerId: number | null;
};

type Action = {
  keepToken: (token: string, expires: number) => void;
  logOut: () => void;
  refreshToken: () => Promise<boolean>;
};

export const useAuthStore = create<State & Action, [['zustand/persist', Omit<State, 'refreshTimerId'>]]>(
  persist(
    (set, get) => ({
      token: '',
      tokenExpiry: null,
      refreshTimerId: null,
      keepToken: (token: string, expires: number) => {
        set(() => ({ token, tokenExpiry: expires }));
        const refreshTime = expires * 1000 - 60 * 1000;
        const timeToRefresh = refreshTime - Date.now();
        const scheduleRefresh = () => {
          const { refreshTimerId } = get();
          if (refreshTimerId) {
            clearTimeout(refreshTimerId);
            set(() => ({ refreshTimerId: null }));
          }
          const newTimerId = setTimeout(
            async () => {
              const success = await get().refreshToken();

              if (success) {
                const { tokenExpiry } = get();
                const nextRefreshTime = tokenExpiry! * 1000 - 60 * 1000;
                const nextTimeToRefresh = nextRefreshTime - Date.now();

                if (nextTimeToRefresh > 0) {
                  scheduleRefresh();
                }
              }
            },
            timeToRefresh > 0 ? timeToRefresh : 0
          );
          set(() => ({ refreshTimerId: newTimerId }));
        };

        scheduleRefresh();
      },

      logOut: () => {
        set(() => ({ token: '', tokenExpiry: null }));
      },
      refreshToken: async () => {
        const { token, logOut, keepToken } = get();
        if (!token) return false;

        try {
          const response = await api.refresh();
          if (response) {
            const { access_token, expires } = response;
            keepToken(access_token, expires);
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.error('Token refresh failed', error);
          logOut();
          return false;
        }
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token, tokenExpiry: state.tokenExpiry }),
    }
  )
);
