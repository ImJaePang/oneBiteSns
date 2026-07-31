import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

// state, action
export const useCounterStore = create<Store>((set, get) => ({
  count: 0,
  actions: {
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
  },
}));

export const useCount = () => {
  const count = useCounterStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCounterStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCounterStore((store) => store.actions.decrease);
  return decrease;
};
