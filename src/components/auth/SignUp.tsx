import { useState } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaCamera } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-xl bg-[#e5e5e5] dark:bg-[#18181b] relative">
        {/* Back Button */}
        <Link
          to="/login"
          className="absolute top-4 left-4 text-gray-600 dark:text-gray-300"
        >
          <IoIosArrowBack size={25} />
        </Link>

        <CardHeader className="flex flex-col items-center gap-2">
          <label htmlFor="profile-upload" className="cursor-pointer">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-20 h-20 rounded-lg object-cover border-2 border-gray-400"
              />
            ) : (
              <div className="w-20 h-20 rounded-lg border-2 border-gray-400 flex items-center justify-center text-gray-500 dark:text-gray-300">
                <FaCamera size={20} />
              </div>
            )}
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Profile Pic Upload
          </p>
        </CardHeader>

        <CardBody className="space-y-4">
          <Input type="text" label="Username" fullWidth />
          <Input type="email" label="Email" fullWidth />
          <div className="flex gap-2">
            <div className="relative w-full">
              <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                fullWidth
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
              >
                {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </button>
            </div>
            <div className="relative w-full">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                fullWidth
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
              >
                {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </button>
            </div>
          </div>
          <Input type="date" label="D.O.B" fullWidth />
          <Input type="text" label="Country" fullWidth />
          <Button
            fullWidth
            className="bg-[#001219] text-white dark:bg-white dark:text-black text-lg"
          >
            Register
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
