import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

export const useCounterStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increaseOne: () => {
                // const count = get().count;
                // set({ count: count + 1 });
                // set((store) => ({
                //   count: store.count + 1,
                // }));
                set((state) => {
                  state.count += 1;
                });
              },
              decreaseOne: () => {
                // set((store) => ({
                //   count: store.count - 1,
                // }));
                set((state) => {
                  state.count -= 1;
                });
              },
            },
          })),
        ),
      ),
      {
        name: "countStore",
        partialize: (state) => ({ count: state.count }), // persist할 state를 선택적으로 지정, 액션도 저장하면 문제되기 때문
        storage: createJSONStorage(() => sessionStorage), // sessionStorage에 저장
      },
    ),
    { name: "countStore" },
  ),
);

useCounterStore.subscribe(
  (store) => store.count,
  (count, preCount) => {
    // 선택된 값이 변경될 때마다 실행하는 Listner
    console.log("Count changed:", count, " ", preCount);

    const store = useCounterStore.getState();
    // useCounterStore.setState((store) => ({count}));
  },
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
