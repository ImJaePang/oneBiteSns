import { type Database } from "@/database.types";

export type PostEntity = Database["public"]["Tables"]["post"]["Row"];

export type ProfileEntity = Database["public"]["Tables"]["profile"]["Row"];

export type Post = PostEntity & { author: ProfileEntity };

export type UseMutationCallback = {
  onSucess?: () => void;
  onError?: (errror: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};
