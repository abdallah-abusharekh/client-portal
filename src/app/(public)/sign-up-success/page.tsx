import SignupSuccessCard from "@/src/features/auth/components/SignupSuccessCard";
import AuthShell from "@/src/features/auth/components/AuthShell";

export default function SignupSuccessPage() {
  return (
    <AuthShell
      title="One Step Left."
      subtitle="Verify your email to unlock your dashboard and start collaborating with your team."
      ctaLabel="Back to Home"
      ctaHref="/"
    >
      <SignupSuccessCard />
    </AuthShell>
  );
}
