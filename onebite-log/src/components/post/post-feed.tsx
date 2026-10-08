import { useInfinitePostsData } from "@/hooks/queries/use-infinite-posts-data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FallBack from "../fallback";
import Loader from "../loader";
import PostItem from "./post-item";

export default function PostFeed({ authorId }: { authorId?: string }) {
  // const { data, error, isPending } = usePostData();
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfinitePostsData(authorId);
  const { ref, inView } = useInView();

  useEffect(() => {
    // console.log(inView);
    if (inView) {
      //데이터 추가
      fetchNextPage();
    }
  }, [inView]);
  if (error) return <FallBack />;
  if (isPending) return <Loader />;
  return (
    <div className="flex flex-col gap-10">
      {/* {data.map((post) => (
        <PostItem key={post.id} {...post} />
      ))} */}
      {data.pages.map((page) =>
        page.map((postId) => <PostItem key={postId} postId={postId} />),
      )}
      {isFetchingNextPage && <Loader />}
      <div ref={ref}></div>
    </div>
  );
}
