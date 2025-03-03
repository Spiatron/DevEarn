import React from "react";
import {Progress} from "@heroui/progress";
import { EmailVerification } from "./emailVerification";
import { OtpVerification } from "./OTP-Verification";
import { ResetPassword } from "./resetPassword";
import { Card } from "@heroui/card";

export default function ForgetPassword() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [identifier, setIdentifier] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const progress = (currentStep / 3) * 100;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleSubmit = () => {
    console.log("Password reset successful!");
    // Handle password reset logic here
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full sm:w-[34rem]  space-y-6 rounded-large bg-[#18181b] p-8 shadow-large">
        <Progress
          aria-label="Progress"
          classNames={{
            track: "bg-default-100",
            indicator: "bg-primary",
          }}
          value={progress}
        />
        
        {currentStep === 1 && (
          <EmailVerification
            identifier={identifier}
            onIdentifierChange={setIdentifier}
            onNext={handleNext}
          />
        )}

        {currentStep === 2 && (
          <OtpVerification
            email={identifier}
            otp={otp}
            onNext={handleNext}
            onOtpChange={setOtp}
          />
        )}

        {currentStep === 3 && (
          <ResetPassword
            confirmPassword={confirmPassword}
            password={password}
            onConfirmPasswordChange={setConfirmPassword}
            onPasswordChange={setPassword}
            onSubmit={handleSubmit}
          />
        )}
      </Card>
    </div>
  );
}