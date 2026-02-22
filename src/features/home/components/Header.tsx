import { Button } from "@/src/shared/Button";
import { Container } from "@/src/shared/Container";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white border-gray-200 border-b w-full">
      <Container className="flex justify-between items-center h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <div className="flex justify-center items-center bg-(--color-primary) rounded-lg w-8 h-8 text-white">
            ▢
          </div>
          Client Portal
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-gray-600 text-sm">
            <Link href="/about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link
              href="/features"
              className="hover:text-black transition-colors"
            >
              Features
            </Link>
          </nav>
          <Button href="/login" size="sm">
            Log in
          </Button>
        </div>
      </Container>
    </header>
  );
}
