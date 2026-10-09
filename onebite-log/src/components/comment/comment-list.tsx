import CommentItem from "@/components/comment/comment-item";
import { useCommentsData } from "@/hooks/queries/use-comments-data";
import FallBack from "../fallback";
import Loader from "../loader";

export default function CommentList({ postId }: { postId: number }) {
  const {
    data: comments,
    error: fetchCommentsError,
    isPending: isFetchCommentPending,
  } = useCommentsData(postId);

  if (fetchCommentsError) return <FallBack />;
  if (isFetchCommentPending) return <Loader />;

  return (
    <div className="flex flex-col gap-5">
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
