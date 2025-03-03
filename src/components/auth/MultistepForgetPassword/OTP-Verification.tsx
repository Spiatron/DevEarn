import {Button} from "@heroui/button";
import {InputOtp} from "@heroui/input-otp";

interface OtpVerificationProps {
  onNext: () => void;
  otp: string;
  onOtpChange: (value: string) => void;
  email: string;
}

export function OtpVerification({onNext, otp, onOtpChange, email}: OtpVerificationProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 4) {
      onNext();
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Enter Verification Code</h1>
        <p className="text-default-500">
          Enter the 4-digit code sent to {email}
        </p>
      </div>
      <div className="flex justify-center py-4">
        <InputOtp
          length={4}
          size="lg"
          value={otp}
          onValueChange={onOtpChange}
        />
      </div>
      <Button
        className="mt-4"
        color="primary"
        isDisabled={otp.length !== 4}
        type="submit"
      >
        Verify Code
      </Button>
    </form>
  );
}