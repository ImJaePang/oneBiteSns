import { deleteImagesInPath } from "@/api/image";
import { deletePost } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import type { UseMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeletePost(callbacks?: UseMutationCallback) {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: async (deletedPost) => {
      if (callbacks?.onSucess) callbacks.onSucess();

      // 이미지를 삭제하는 기능
      if (deletedPost.image_urls && deletedPost.image_urls.length > 0){
          await deleteImagesInPath(`${deletedPost.author_id}/${deletedPost.id}`);
      }

      queryClient.resetQueries({
        queryKey: QUERY_KEYS.post.list,
      });

      
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
