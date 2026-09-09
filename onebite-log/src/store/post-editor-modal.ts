import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

const initialSate = {
  isOpen: false,
};

const usePostEditorModalStore = create(
  devtools(
    combine(initialSate, (set) => ({
      action: {
        open: () => {
          set({ isOpen: true });
        },
        close: () => {
          set({ isOpen: false });
        },
      },
    })),
    { name: "postEditorModalStore" },
  ),
);

export const useOpenPostEditorModal = () => {
  const open = usePostEditorModalStore((store) => store.action.open);
  return open;
};

export const usePostEditorModal = () => {
  const {
    isOpen,
    action: { open, close },
  } = usePostEditorModalStore();
  return {
    isOpen,
    open,
    close,
  };
};
