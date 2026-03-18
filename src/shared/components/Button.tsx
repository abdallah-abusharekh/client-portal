import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  loader?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",
  ghost: "text-gray-700 hover:bg-gray-100",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  loading = false,
  loader = "Loading...",
  className = "",
  ...props
}: ButtonProps) {
  const styles = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} disabled={loading || props.disabled} {...props}>
      {loading ? loader : children}
    </button>
  );
}
