import { togglePostLike } from "@/api/post";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export default function useTogglePostLike(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: togglePostLike,
    onSuccess: () => {
      if (callbacks?.onSucess) callbacks.onSucess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
