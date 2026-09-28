import { deleteImagesInPath } from "@/api/image";
import { deletePost } from "@/api/post";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useDeletePost(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: deletePost,
    onSuccess: async (deletedPost) => {
      if (callbacks?.onSucess) callbacks.onSucess();

      // 이미지를 삭제하는 기능
      if (deletedPost.image_urls && deletedPost.image_urls.length > 0){
          await deleteImagesInPath(`${deletedPost.author_id}/${deletedPost.id}`);
      }
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
