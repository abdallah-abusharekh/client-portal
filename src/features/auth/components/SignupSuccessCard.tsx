import Button from "@/src/shared/components/Button";
import { FiMail } from "react-icons/fi";

export default function SignupSuccessCard() {
  return (
    <div className="flex flex-col items-center gap-5 bg-background shadow-xl px-12 py-10 rounded-2xl w-105 text-center">
      {/* Icon */}
      <div className="flex justify-center items-center bg-primary-light/20 rounded-full w-16 h-16 text-primary">
        <FiMail size={26} />
      </div>

      {/* Text */}
      <div className="space-y-2">
        <h1 className="font-semibold text-xl">Verify your email</h1>

        <p className="text-gray-500 text-sm leading-relaxed">
          We’ve sent a verification link to your email address. Please check
          your inbox and click the link to activate your account.
        </p>
      </div>

      {/* Button */}
      <Button href="/sign-in" className="w-full">
        Go to Sign In
      </Button>
    </div>
  );
}
