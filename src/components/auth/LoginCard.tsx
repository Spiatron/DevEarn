import { Card, CardHeader, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { FaDev } from "react-icons/fa";

export default function LoginCard() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md sm:w-96 p-6 shadow-lg rounded-xl bg-[#e5e5e5] dark:bg-[#18181b]">
        <CardHeader className="text-center text-xl font-bold justify-center">
          <Link
            className="flex items-center gap-1 justify-center"
            color="foreground"
            href="/"
          >
            <FaDev size={45} className="leading-none" />
            <p className="font-bold text-inherit text-xl leading-[normal]">
              Earn
            </p>
          </Link>
        </CardHeader>
        <CardBody className="space-y-4">
          <Input type="text" label="Username or Email" fullWidth />
          <Input type="password" label="Password" fullWidth />
          <div className="flex justify-end text-sm">
            <Link href="/forgetPassword" className=" text-black dark:text-white text-md">
              Forget Password?
            </Link>
          </div>
          <Button className="bg-[#001219] text-white dark:bg-white dark:text-black text-md"fullWidth>Sign in</Button>
          <div className="text-center text-lg">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-black dark:text-white font-bold text-lg"
            >
              Register
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
