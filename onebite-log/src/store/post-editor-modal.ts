import type { PostEntity } from "@/types";
import { Store } from "lucide-react";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type CloseState = {
  isOpen: false;
};

type CreateMode = {
  isOpen: true;
  type: "CREATE";
};

type EditMode = {
  isOpen: true;
  type: "EDIT";
  postId: number;
  content: string;
  imageUrls: string[] | null;
};

type OpenState = CreateMode | EditMode;

type State = CloseState | OpenState;

const initialSate = {
  isOpen: false,
} as State;

const usePostEditorModalStore = create(
  devtools(
    combine(initialSate, (set) => ({
      action: {
        openCreate: () => {
          set({ isOpen: true, type: "CREATE" });
        },
        openEdit: (param: Omit<EditMode, "isOpen" | "type">) => {
          set({ isOpen: true, type: "EDIT", ...param });
        },
        close: () => {
          set({ isOpen: false });
        },
      },
    })),
    { name: "postEditorModalStore" },
  ),
);

// export const useOpenPostEditorModal = () => {
//   const open = usePostEditorModalStore((store) => store.action.open);
//   return open;
// };

export const useOpenCreatePostModal = () => {
  const openCreate = usePostEditorModalStore(
    (store) => store.action.openCreate,
  );
  return openCreate;
};

export const useOpenEditPostModal = () => {
  const openEdit = usePostEditorModalStore((store) => store.action.openEdit);
  return openEdit;
};

export const usePostEditorModal = () => {
  const store = usePostEditorModalStore();
  return store as typeof store & State;
};
