import Button from "@/src/shared/components/Button";
import { FiMail } from "react-icons/fi";

export default function SignupSuccessCard() {
  return (
    <div className="flex flex-col items-center gap-5 bg-linear-to-br from-[#b9d9fd] via-[#deeeff] to-[#e8f3ff] shadow-md p-7 rounded-2xl text-center">
      <div className="flex justify-center items-center bg-primary-light/20 rounded-full w-16 h-16 text-primary">
        <FiMail size={26} />
      </div>

      <div className="space-y-2">
        <h1 className="font-semibold text-xl">Verify your email</h1>

        <p className="text-gray-500 text-sm leading-relaxed">
          We&apos;ve sent a verification link to your email address. Please
          check your inbox and click the link to activate your account.
        </p>
      </div>

      <Button href="/sign-in" className="w-fit">
        Go to Sign In
      </Button>
    </div>
  );
}
