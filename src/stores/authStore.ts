import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  token: string;
};

type Action = {
  keepToken: (token: string) => void;
  logOut: () => void;
};

export const useAuthStore = create<State & Action, [['zustand/persist', State]]>(
  persist(
    (set) => ({
      token: '',
      keepToken: (token: string) => set(() => ({ token })),
      logOut: () => {
        set(() => ({ token: '' }));
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token }),
    }
  )
);
