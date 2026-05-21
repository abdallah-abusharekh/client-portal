import SignUpCard from "@/src/features/auth/components/SignUpCard";
import AuthShell from "@/src/features/auth/components/AuthShell";

export default function SignUpPage() {
  return (
    <AuthShell
      title={`Build Strong Client
Relationships.`}
      subtitle="Create your account and start coordinating work with your team in minutes."
      ctaLabel="See Features"
      ctaHref="/"
    >
      <SignUpCard />
    </AuthShell>
  );
}
