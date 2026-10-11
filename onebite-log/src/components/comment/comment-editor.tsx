import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCreateComment } from "@/hooks/mutations/comment/use-create-comment";
import { toast } from "sonner";
import { useUpdateComment } from "@/hooks/mutations/comment/use-update-comment";

type CreateMode = {
  type: "CREATE";
  postId: number;
};

type EditMode = {
  type: "EDIT";
  commentId: number;
  initialContent: string;
  onClose: () => void;
};

type Props = CreateMode | EditMode;

export default function CommentEditor(props: Props) {
  const { mutate: createComment, isPending: isCreateCommentPending } =
    useCreateComment({
      onSucess: () => {
        setContent("");
      },
      onError: (error) => {
        toast.error("댓글 추가에 실패했습니다.", { position: "top-center" });
      },
    });

  const { mutate: updateComment, isPending: isUpdateCommentPending } =
    useUpdateComment({
      onSucess: () => {
        (props as EditMode).onClose();
      },
      onError: (error) => {
        toast.error("댓글 수정에 실패했습니다.", { position: "top-center" });
      },
    });

  const [content, setContent] = useState("");

  const isPending = isCreateCommentPending || isUpdateCommentPending;

  useEffect(() => {
    if (props.type === "EDIT") {
      setContent(props.initialContent);
    }
  }, []);

  const handleSubmitClick = () => {
    if (content.trim() === "") return;

    if (props.type === "CREATE") {
      // 등록인 경우
      createComment({
        postId: props.postId,
        content,
      });
    } else {
      // 수정인 경우
      updateComment({
        id: props.commentId,
        content: content,
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Textarea
        disabled={isPending}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex justify-end gap-2">
        {props.type === "EDIT" && (
          <Button
            variant={"outline"}
            onClick={() => props.onClose()}
            disabled={isPending}
          >
            취소
          </Button>
        )}
        <Button disabled={isPending} onClick={handleSubmitClick}>
          {props.type === "CREATE" ? "작성" : "수정"}
        </Button>
      </div>
    </div>
  );
}
