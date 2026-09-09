import { useCreatePost } from "@/hooks/mutations/post/use-create-post";
import { usePostEditorModal } from "@/store/post-editor-modal";
import { ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

export default function PostEditorModal() {
  const { isOpen, close } = usePostEditorModal();
  const { mutate: createPost, isPending: isCreatePostPening } = useCreatePost({
    onSucess: () => {
      close();
    },
    onError: (error) => {
      // const message = generateErrorMessage(error);
      // toast.error(message, {
      //   position: "top-center",
      // });
      toast.error("포지션 생성에 실패했습니다.", {
        position: "top-center",
      });
    },
  });

  const handleCloseModal = () => {
    close();
  };
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCreatePostClick = () => {
    if (content.trim() === "") return;
    createPost(content);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  useEffect(() => {
    if (!isOpen) return;
    textareaRef.current?.focus();
    setContent("");
  }, [isOpen]);
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[90vh]">
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea
          className="max-h-125 min-h-25 focus:outline-none"
          placeholder="무슨 일이 있었나요?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          ref={textareaRef}
          disabled={isCreatePostPening}
        />
        <Button
          variant={"outline"}
          className="cursor-pointer"
          disabled={isCreatePostPening}
        >
          <ImageIcon />
          이미지 추가
        </Button>
        <Button
          onClick={handleCreatePostClick}
          className="cursor-pointer"
          disabled={isCreatePostPening}
        >
          저장
        </Button>
      </DialogContent>
    </Dialog>
  );
}
