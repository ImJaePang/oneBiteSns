import { create } from "zustand";

type Store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

// state, action
export const useCounterStore = create<Store>((set, get) => ({
  count: 0,
  increase: () => {
    // const count = get().count;
    // set({ count: count + 1 });
    set((store) => ({
      count: store.count + 1,
    }));
  },
  decrease: () => {
    set((store) => ({
      count: store.count - 1,
    }));
  },
}));
