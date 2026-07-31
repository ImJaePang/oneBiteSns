import { useCount, useCounterStore } from "@/store/count";

export default function Viewer() {
  //   const { count } = useCounterStore();
  const count = useCount();
  return <div>{count}</div>;
}
