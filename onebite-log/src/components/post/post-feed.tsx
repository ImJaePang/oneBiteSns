import { usePostData } from "@/hooks/queries/use-post-data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FallBack from "../fallback";
import Loader from "../loader";
import PostItem from "./post-item";
import { useInfinitePostsData } from "@/hooks/queries/use-infinite-posts-data";

export default function PostFeed() {
  // const { data, error, isPending } = usePostData();
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfinitePostsData();
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
        page.map((post) => <PostItem key={post.id} {...post} />),
      )}
      {isFetchingNextPage && <Loader />}
      <div ref={ref}></div>
    </div>
  );
}
