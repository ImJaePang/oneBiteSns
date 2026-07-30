import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sing-up-page";
import ShadCnPage from "./pages/shadCn-page";
import CounterPage from "./pages/counter-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth Layout!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/shadcn" element={<ShadCnPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
