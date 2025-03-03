import ForgetPassword from "@/components/auth/MultistepForgetPassword/ForgetPassword";
import { FaDev } from "react-icons/fa";

const backgroundUrl =
  "https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D";

export default function DocsPage() {
  return (
    <section
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* Black tinted overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

          {/* Logo at the top right corner */}
            <div className="absolute top-5 right-5 flex items-center gap-2 text-white">
              <FaDev size={45} />
              <p className="font-bold text-xl">Earn</p>
            </div>

      <ForgetPassword />
    </section>
  );
}
