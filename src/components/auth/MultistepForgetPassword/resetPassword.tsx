import React from "react";
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import {Icon} from "@iconify/react";

interface ResetPasswordProps {
  onSubmit: () => void;
  password: string;
  confirmPassword: string;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
}

export function ResetPassword({
  onSubmit,
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
}: ResetPasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && confirmPassword && password === confirmPassword) {
      onSubmit();
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const isValid = password && confirmPassword && password === confirmPassword;
  const passwordMismatch = !!(password && confirmPassword && password !== confirmPassword);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-default-500">
          Please enter your new password.
        </p>
      </div>
      <Input
        isRequired
        endContent={
          <button className="focus:outline-none" type="button" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <Icon className="text-2xl text-default-400" icon="solar:eye-closed-linear" />
            ) : (
              <Icon className="text-2xl text-default-400" icon="solar:eye-bold" />
            )}
          </button>
        }
        label="New Password"
        placeholder="Enter your new password"
        type={showPassword ? "text" : "password"}
        value={password}
        variant="bordered"
        onValueChange={onPasswordChange}
      />
      <Input
        isRequired
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? (
              <Icon className="text-2xl text-default-400" icon="solar:eye-closed-linear" />
            ) : (
              <Icon className="text-2xl text-default-400" icon="solar:eye-bold" />
            )}
          </button>
        }
        isInvalid={passwordMismatch}
        label="Confirm Password"
        placeholder="Confirm your new password"
        type={showConfirmPassword ? "text" : "password"}
        value={confirmPassword}
        variant="bordered"
        onValueChange={onConfirmPasswordChange}
      />
      {passwordMismatch && (
        <p className="text-danger text-small">Passwords do not match</p>
      )}
      <Button
        className="mt-4"
        color="primary"
        isDisabled={!isValid}
        type="submit"
      >
        Reset Password
      </Button>
    </form>
  );
}