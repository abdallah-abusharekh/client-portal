import { Container } from "@/src/shared/components/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 border-gray-200 border-t">
      <Container className="flex md:flex-row flex-col justify-between items-center gap-4 text-gray-600 text-sm">
        <p>© 2026 Client Portal</p>

        <nav className="flex items-center gap-6">
          <Link href="/about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link
            href="/features"
            className="hover:text-gray-900 transition-colors"
          >
            Features
          </Link>
          <Link href="/login" className="hover:text-gray-900 transition-colors">
            Log in
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
