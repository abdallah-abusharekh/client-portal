import SignInCard from "@/src/features/auth/components/SignInCard";
import AuthShell from "@/src/features/auth/components/AuthShell";

export default function SignInPage() {
  return (
    <AuthShell
      title="Secure Projects, Faster Delivery."
      subtitle="Manage clients, tasks, meetings, and milestones in one focused workspace."
      ctaLabel="Explore Platform"
      ctaHref="/"
    >
      <SignInCard />
    </AuthShell>
  );
}
