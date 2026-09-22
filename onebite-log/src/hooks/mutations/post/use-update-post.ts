import { updatePost } from "@/api/post";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdatePost(callbacks?: UseMutationCallback) {
  return useMutation({
    // mutationFn: createPost,
    mutationFn: updatePost,
    onSuccess: () => {
      if (callbacks?.onSucess) callbacks.onSucess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
