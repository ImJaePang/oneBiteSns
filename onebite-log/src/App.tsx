import { useEffect } from "react";
import supabase from "./lib/supabase";
import RootRoute from "./root-route";
import { useSetSession } from "./store/session";

export default function App() {
  const setSession = useSetSession();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  return <RootRoute />;
}
