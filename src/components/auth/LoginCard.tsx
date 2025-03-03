import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Icon } from "@iconify/react";

export default function LoginCard() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isPasswordValid = password.length >= 8;
  const isFormValid = username.trim() !== "" && isPasswordValid;

  const passwordErrorMessage = password.length > 0 && !isPasswordValid 
    ? "Password must be at least 8 characters long" 
    : undefined;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full sm:w-[30rem] max-w-2xl p-8 rounded-2xl bg-[#18181b] text-white shadow-2xl">
        <CardHeader className="flex flex-col gap-1 text-center">
          <p className="text-xl text-default-500">
            Welcome back! Please enter your details.
          </p>
        </CardHeader>

        <CardBody className="space-y-6">
          <Input
            isRequired
            label="Username or Email Address"
            placeholder="Enter your username or email"
            value={username}
            variant="bordered"
            onValueChange={setUsername}
          />
          
          <Input
            isRequired
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Icon className="text-2xl text-default-400" icon="solar:eye-closed-linear" />
                ) : (
                  <Icon className="text-2xl text-default-400" icon="solar:eye-bold" />
                )}
              </button>
            }
            errorMessage={passwordErrorMessage}
            isInvalid={password.length > 0 && !isPasswordValid}
            label="Password"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            value={password}
            variant="bordered"
            onValueChange={setPassword}
          />

          <div className="flex justify-end">
            <Link
              className="text-small"
              href="forgetPassword"
              size="sm"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            className="w-full"
            color="primary"
            isDisabled={!isFormValid}
            size="lg"
          >
            Log In
          </Button>

          <div className="flex items-center gap-4">
            <Divider className="flex-1" />
            <span className="text-default-500 text-small">OR</span>
            <Divider className="flex-1" />
          </div>

          <div className="flex flex-col gap-2">
            <Button
              className="w-full"
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
            >
              Continue with Google
            </Button>
            <Button
              className="w-full"
              startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
              variant="bordered"
            >
              Continue with GitHub
            </Button>
          </div>

          <div className="text-center">
            Need to create an account?{" "}
            <Link href="/signup" className="text-blue-400">
              Sign Up
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}