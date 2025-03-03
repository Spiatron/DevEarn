import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";
import { Checkbox } from "@heroui/checkbox";
import { DatePicker } from "@heroui/date-picker";
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import { Icon } from "@iconify/react";

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [agreed, setAgreed] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [profileImage, setProfileImage] = React.useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const passwordMatch = password === confirmPassword;
  const passwordError = confirmPassword && !passwordMatch;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-2xl bg-content1 p-8">
        <CardHeader className="flex flex-col items-center gap-4 pb-6">
          <div className="relative">
            <Avatar
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
              icon: "text-black/80",
            }}
              className="h-24 w-24 cursor-pointer text-large"
              src={profileImage || undefined}
              showFallback
              onClick={triggerFileInput}
            />
            <Button
              isIconOnly
              className="absolute bottom-0 right-0 min-w-unit-8 h-unit-8"
              size="sm"
              variant="flat"
              onClick={triggerFileInput}
            >
              <Icon className="text-xl" icon="solar:camera-add-bold" />
            </Button>
            <input
              className="hidden"
              accept="image/*"
              ref={fileInputRef}
              type="file"
              onChange={handleImageUpload}
            />
          </div>
        </CardHeader>

        <CardBody className="space-y-4">
          <Input
            isRequired
            label="Username"
            placeholder="Enter your username"
            variant="bordered"
          />
          <Input
            isRequired
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
          />

          <div className="flex gap-4">
            <Input
              isRequired
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Icon
                      className="text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              variant="bordered"
              onValueChange={setPassword}
            />
            <Input
              isRequired
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <Icon
                      className="text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              errorMessage={
                passwordError ? "Passwords do not match" : undefined
              }
              isInvalid={!!passwordError}
              label="Confirm Password"
              placeholder="Confirm your password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              variant="bordered"
              onValueChange={setConfirmPassword}
            />
          </div>

          <DatePicker
            isRequired
            label="Date of Birth"
            showMonthAndYearPickers
            variant="bordered"
          />

          <Input
            isRequired
            label="Country"
            placeholder="Enter your country"
            variant="bordered"
          />

          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I agree with the <span className="text-blue-400">Terms</span> and{" "}
              <span className="text-blue-400">Privacy Policy</span>
            </label>
          </div>

          <Button
            className="w-full"
            color="primary"
            isDisabled={!agreed || !passwordMatch}
            size="lg"
          >
            Sign Up
          </Button>

          <div className="flex items-center gap-2">
            <Divider className="flex-1" />
            <span className="text-default-500 text-small">OR</span>
            <Divider className="flex-1" />
          </div>

          <Button
            className="w-full"
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Continue with Google
          </Button>
          <Button
            className="w-full"
            startContent={
              <Icon className="text-default-500" icon="fe:github" width={24} />
            }
            variant="bordered"
          >
            Continue with GitHub
          </Button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400">
              Log In
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
