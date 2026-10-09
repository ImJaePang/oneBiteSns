import { useSession } from "@/store/session";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import FallBack from "../fallback";
import Loader from "../loader";
import defaultAvatar from "@/assets/default-avatar.png";
import { Input } from "../ui/input";
import { useProfileEditorModal } from "@/store/profile-editor-modal";
import { Button } from "../ui/button";

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
              <img
                src={profile.avatar_url || defaultAvatar}
                className="h-20 w-20 cursor-pointer rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">닉네임</div>
              <Input value={profile.nickname} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">소개</div>
              <Input value={profile.bio} />
            </div>
            <Button className="cursor-pointer">수정하기</Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
