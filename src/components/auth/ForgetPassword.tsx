import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { InputOtp } from "@heroui/input-otp";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons

export default function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    if (step === 1 && email) setStep(2);
    else if (step === 2 && otp.length === 4) setStep(3);
  };

  const handleResetPassword = () => {
    if (newPassword) {
      console.log("Password Reset Successfully!");
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Multi-Step Progress Indicator (Outside the Card) */}
      <div className="flex items-center justify-center space-x-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg border-2 text-lg font-bold ${
                step >= s
                  ? "bg-black dark:bg-[#fcbf49] text-white dark:text-black border-black"
                  : "bg-gray-300 text-black border-gray-400"
              }`}
            >
              {s}
            </div>
            {s < 3 && <div className="w-16 h-[2px] bg-black dark:bg-gray-400 mx-2"></div>}
          </div>
        ))}
      </div>

      {/* Forget Password Form */}
      <Card className="w-full max-w-md sm:w-96 p-6 shadow-lg rounded-xl bg-[#e5e5e5] dark:bg-[#18181b]">
        <CardBody className="space-y-4">
          {step === 1 && (
            <>
              <Input
                type="text"
                label="Username or Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="bg-[#001219] text-white dark:bg-white dark:text-black"
                fullWidth
                onClick={handleNext}
              >
                Next
              </Button>
              <div className="text-center text-lg">
                Remembered your password?{" "}
                <Link href="/signin" className="font-bold text-black dark:text-white">
                  Sign in
                </Link>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <p className="text-center text-md text-gray-500">
                Enter the 4-digit OTP sent to your email.
              </p>
              <div className="flex justify-center">
                <InputOtp
                  length={4}
                  value={otp}
                  size="lg"
                  onValueChange={setOtp}
                />
              </div>
              <Button
                className="bg-[#001219] text-white dark:bg-white dark:text-black"
                fullWidth
                onClick={handleNext}
                disabled={otp.length !== 4} // Disable button until OTP is complete
              >
                Verify
              </Button>
            </>
          )}

          {step === 3 && (
            <>
              {/* New Password Input with Hide/Unhide */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  label="New Password"
                  fullWidth
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>

              {/* Confirm Password Input with Hide/Unhide */}
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>

              <Button
                className="bg-[#001219] text-white dark:bg-white dark:text-black"
                fullWidth
                onClick={handleResetPassword}
                disabled={newPassword !== confirmPassword || !newPassword}
              >
                Reset Password
              </Button>
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
