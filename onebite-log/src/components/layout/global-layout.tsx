import { Link, Outlet } from "react-router";
import Logo from "@/assets/logo.png";
import { SunIcon } from "lucide-react";
import DefaultAvata from "@/assets/default-avatar.png";

export default function GlobalLayout() {
  return (
    <div>
      <header className="h-15 border-b">
        <div className="flex h-full justify-between">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              className="h-5"
              src={Logo}
              alt="한입 로그의 로고, 메세지 말풍선을 형상화한 모양이다."
            />
            <div className="font-bold">한입 로그</div>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hover:bg-muted cursor-pointer rounded-full p-2">
              <SunIcon />
            </div>
            <img className="h-6" src={DefaultAvata} />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
