import { createPostWithImages } from "@/api/post";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useCreatePost(callbacks?: UseMutationCallback) {
  return useMutation({
    // mutationFn: createPost,
    mutationFn: createPostWithImages,
    onSuccess: () => {
      if (callbacks?.onSucess) callbacks.onSucess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
