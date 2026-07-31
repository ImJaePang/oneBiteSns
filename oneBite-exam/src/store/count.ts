import { create } from "zustand";
import { combine } from "zustand/middleware";

// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

export const useCounterStore = create(
  combine({ count: 0 }, (set, get) => ({
    actions: {
      increaseOne: () => {
        // const count = get().count;
        // set({ count: count + 1 });
        set((store) => ({
          count: store.count + 1,
        }));
      },
      decreaseOne: () => {
        set((store) => ({
          count: store.count - 1,
        }));
      },
    },
  })),
);

// state, action
// export const useCounterStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       // const count = get().count;
//       // set({ count: count + 1 });
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

export const useCount = () => {
  const count = useCounterStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCounterStore((store) => store.actions.increaseOne);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCounterStore((store) => store.actions.decreaseOne);
  return decrease;
};
