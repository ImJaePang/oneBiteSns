import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store/count";

export default function CounterPage() {
  const { count, increase, decrease } = useCounterStore();
  return (
    <div>
      <h1 className="text-2xl font-bold">CounterPage</h1>
      <div>{count}</div>
      <div>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
      </div>
    </div>
  );
}
