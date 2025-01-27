import api from '@/modules/api/api';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  token: string;
  tokenExpiry: number | null;
};

type Action = {
  keepToken: (token: string, expires: number) => void;
  logOut: () => void;
  refreshToken: () => Promise<void>;
};

export const useAuthStore = create<State & Action, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      token: '',
      tokenExpiry: null,
      keepToken: (token: string, expires: number) => {
        const expiryTime = expires * 1000;
        set(() => ({ token, tokenExpiry: expiryTime }));
        const refreshTimeout = expiryTime - Date.now() - 60 * 1000;
        if (refreshTimeout > 0) {
          setTimeout(() => {
            get().refreshToken();
          }, refreshTimeout);
        }
      },
      logOut: () => {
        set(() => ({ token: '', tokenExpiry: null }));
      },
      refreshToken: async () => {
        const { token, logOut, keepToken } = get();
        if (!token) return;

        try {
          const response = await api.refresh();
          const { access_token, expires } = response.data;
          keepToken(access_token, expires);
        } catch (error) {
          console.error('Token refresh failed', error);
          logOut();
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
