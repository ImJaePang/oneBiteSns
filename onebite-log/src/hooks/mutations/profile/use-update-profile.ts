import { updateProfile } from "@/api/profile";
import { QUERY_KEYS } from "@/lib/constants";
import { type ProfileEntity, type UseMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateProfile(calbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (updatedProfile) => {
      if (calbacks?.onSucess) calbacks.onSucess();
      queryClient.setQueryData<ProfileEntity>(
        QUERY_KEYS.profile.byId(updatedProfile.id),
        updatedProfile,
      );
    },
    onError: (error) => {
      if (calbacks?.onError) calbacks.onError(error);
    },
  });
}
