import { Route, Routes } from "react-router-dom";

import LoginPage from "@/pages/auth/login";
import SignUpPage from "@/pages/auth/signUp";
import ForgetPasswordPage from "@/pages/auth/forgetPassword";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route element={<LoginPage />} path="/login" />
      <Route element={<LoginPage />} path="/signin" />
      <Route element={<SignUpPage />} path="/signUp" />
      <Route element={<ForgetPasswordPage />} path="/forgetPassword" />

      {/* Pages Routes */}
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
