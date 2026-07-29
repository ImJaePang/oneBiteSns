import "../App.css";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Toaster } from "../components/ui/sonner";
import { Textarea } from "../components/ui/textarea";
import { cn } from "../lib/utils";
import { ChefHat } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

export default function ShadCnPage() {
  const isActive = true;

  return (
    <div>
      {/* shadcn 소너 */}
      <Toaster />
      <div className="p-5">
        <div>
          {/* shadcn 버튼 */}
          <Button
            onClick={() => {
              toast("토스트 메세지", {
                position: "top-center",
              });
            }}
          >
            toast-sonner 버튼
          </Button>
          <Button variant={"destructive"}>shadcndestructive 버튼</Button>
          <Button variant={"ghost"}>shadcn_ghost 버튼</Button>
          <Button variant={"link"}>shadcn_link 버튼</Button>
          <Button variant={"outline"}>shadcn_outline 버튼</Button>
          <Button variant={"secondary"}>shadcn_secondary 버튼</Button>
        </div>
        <div>
          {/*shadcn 인풋 */}
          <Input placeholder="shadcn 인풋" />
        </div>
        <div>
          {/* shadcn 텍스트 에리어 */}
          <Textarea placeholder="shadcn 텍스트 에리어" />
        </div>
        <div>
          {/* shadcn carousel 캐로셀 */}
          캐로셀 시작
          <Carousel className="mx-10">
            <CarouselContent>
              <CarouselItem className="basis-1/3 text-center">1</CarouselItem>
              <CarouselItem className="basis-1/3 text-center">2</CarouselItem>
              <CarouselItem className="basis-1/3 text-center">3</CarouselItem>
              <CarouselItem className="basis-1/3 text-center">4</CarouselItem>
              <CarouselItem className="basis-1/3 text-center">5</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          캐로셀 끝
        </div>
        {/* shadcn 팝오버 */}
        팝오버
        <div>
          <Popover>
            {/* <PopoverTrigger asChild> */}
            <PopoverTrigger>
              {/* <Button> */}
              Open Popover
              {/* </Button> */}
            </PopoverTrigger>
            <PopoverContent>content</PopoverContent>
          </Popover>
        </div>
        <div>
          {/* shadcn 다이얼로그 */}
          <Dialog>
            <DialogTrigger>오픈 다이얼로그</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Title</DialogTitle>
                <DialogDescription>Description</DialogDescription>
              </DialogHeader>
              <div>바디</div>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          {/* shadcn 알럿 다이얼로그 */}
          <AlertDialog>
            <AlertDialogTrigger>오픈 알럿다이얼로그</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Title</AlertDialogTitle>
                <AlertDialogDescription>Description</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  onClick={() => {
                    console.log("action");
                  }}
                >
                  Action
                </AlertDialogAction>
                <AlertDialogCancel
                  onClick={() => {
                    console.log("cancel");
                  }}
                >
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div>
          {/*lucide icon */}
          <ChefHat className="w-20 fill-red-500" />
        </div>
        <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
          isActive
        </div>
        <div className="text-primary">Primary</div>
        <div className="text-muted">Muted</div>
        <div className="text-destructive">Destructive</div>
      </div>

      <hr />

      {/* 1.타이포그래피 typography */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,20)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-black">text-2xl</div>
      <div className="text-[13px]">text-13px</div>

      {/* 2.백그라운드 컬러 background color */}
      <div className="bg-amber-500">bg-amber-500</div>

      {/* 3.사이징 sizing */}
      <div className="w-20 bg-blue-500">box</div>
      <div className="w-[90px] bg-blue-500">90px box</div>
      <div className="h-10 bg-green-500">h-10 box</div>

      {/* 4.여백 spacing - padding & margin */}
      <div className="m-5 h-50 w-50 bg-red-400 px-5">
        <div className="h-full w-full bg-blue-500"></div>
      </div>

      {/* 5. 보더 border */}
      <div className="border border-red-500">border</div>
      <div className="m-5 rounded-2xl border-2 p-5">border-2</div>
      <div className="m-5 border-x">border-x</div>
      <div className="m-5 border-y-2">border-x</div>
      <div className="border-l-3-red m-5">border-x</div>

      {/* 6. 플렉스 컨테이너 flex */}
      <div className="flex flex-row items-start justify-around">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </div>
  );
}
