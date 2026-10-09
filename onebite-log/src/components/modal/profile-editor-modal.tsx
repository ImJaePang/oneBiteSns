import { useSession } from "@/store/session";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import FallBack from "../fallback";
import Loader from "../loader";
import defaultAvatar from "@/assets/default-avatar.png";
import { Input } from "../ui/input";
import { useProfileEditorModal } from "@/store/profile-editor-modal";
import { Button } from "../ui/button";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useUpdateProfile } from "@/hooks/mutations/profile/use-update-profile";
import { toast } from "sonner";

type Image = { file: File; previewUrl: string };

export default function ProfileEditorModal() {
  const session = useSession();
  const store = useProfileEditorModal();
  const {
    isOpen,
    actions: { close },
  } = store;
  //   actions.close
  const {
    data: profile,
    error: fetchProfileError,
    isPending: isFetchProfilePending,
  } = useProfileData(session?.user.id);

  const { mutate: updateProfile, isPending: isUpdateProfilePending } =
    useUpdateProfile({
      onSucess: () => {
        close();
      },
      onError: (error) => {
        toast.error("프로필 수정에 실패했습니다.", {
          position: "top-center",
        });
      },
    });

  const [avatarImage, setAvatarImage] = useState<Image | null>(null);
  const [nickname, setNickname] = useState("");
  const [bio, setBio] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      if (avatarImage) {
        URL.revokeObjectURL(avatarImage.previewUrl);
      }
      setNickname("");
      setBio("");
      setAvatarImage(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && profile) {
      setNickname(profile.nickname);
      setBio(profile.bio);
      setAvatarImage(null);
    }
  }, [profile, isOpen]);
  const handleUpdateClick = () => {
    if (nickname.trim() === "") return;
    updateProfile({
      userId: session!.user.id,
      nickname,
      bio,
      avatarImageFile: avatarImage?.file,
    });
  };
  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    if (avatarImage) {
      URL.revokeObjectURL(avatarImage.previewUrl);
    }

    setAvatarImage({
      file,
      previewUrl: URL.createObjectURL(file),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="flex flex-col gap-5">
        <DialogTitle>프로필 수정하기</DialogTitle>
        {fetchProfileError && <FallBack />}
        {isFetchProfilePending && <Loader />}
        {!fetchProfileError && !isFetchProfilePending && (
          <>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">아바타이미지</div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleSelectImage}
                disabled={isUpdateProfilePending}
              />
              <img
                onClick={() => {
                  if (fileInputRef.current) fileInputRef.current.click();
                }}
                src={
                  avatarImage?.previewUrl || profile.avatar_url || defaultAvatar
                }
                className="h-20 w-20 cursor-pointer rounded-full object-cover"
              />
            </div>
            진지한앵무새65d
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">닉네임</div>
              <Input
                disabled={isUpdateProfilePending}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
                value={nickname}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">소개</div>
              <Input
                disabled={isUpdateProfilePending}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
                value={bio}
              />
            </div>
            <Button
              disabled={isUpdateProfilePending}
              onClick={handleUpdateClick}
              className="cursor-pointer"
            >
              수정하기
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
