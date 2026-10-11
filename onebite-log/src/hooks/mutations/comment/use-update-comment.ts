import { updateComment } from "@/api/comment";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdateComment(calbacks: UseMutationCallback) {
  return useMutation({
    mutationFn: updateComment,
    onSuccess: () => {
      if (calbacks.onSucess) calbacks.onSucess();
    },
    onError: (error) => {
      if (calbacks.onError) calbacks.onError(error);
    },
  });
}
