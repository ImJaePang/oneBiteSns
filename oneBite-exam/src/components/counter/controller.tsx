import { Button } from "../ui/button";
import {
  useCounterStore,
  useDecreaseCount,
  useIncreaseCount,
} from "@/store/count";

export default function Controller() {
  //   const { increase, decrease } = useCounterStore((store) => store.actions);
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </div>
  );
}
