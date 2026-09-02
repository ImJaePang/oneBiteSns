import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInWithPassword } from "@/hooks/mutations/use-sign-in-with-password";
import { useState } from "react";
import { Link } from "react-router";
import githubLogo from "@/assets/github-mark.svg";
import { useSignInWithOAuth } from "@/hooks/mutations/use-sign-in-with-oauth";
import { toast } from "sonner";

export default function SignInPage() {
  const { mutate: signInWithPassword } = useSignInWithPassword({
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center",
      });
      setPassword("");
    },
  });
  const { mutate: signInWithOAuth } = useSignInWithOAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithPasswordClick = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;
    signInWithPassword({
      email: email,
      password: password,
    });
  };

  const handleSignInWithGihubClick = () => {
    signInWithOAuth("github");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          className="py-6"
          type="email"
          placeholder="exapmle@abc.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="py-6"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button className="w-full" onClick={handleSignInWithPasswordClick}>
          로그인
        </Button>
        <Button
          className="w-full"
          variant={"outline"}
          onClick={handleSignInWithGihubClick}
        >
          <img src={githubLogo} className="h-4 w-4" />
          Github 계정으로 로그인
        </Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>
          계정이 없으시다면? 회원가입
        </Link>
      </div>
    </div>
  );
}
