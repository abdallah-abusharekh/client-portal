import Logo from "@/src/shared/components/Logo";

export default function Nav() {
  return (
    <header className="top-0 z-50 fixed backdrop-blur w-full">
      <div className="flex justify-between items-center mx-auto px-6 max-w-7xl h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-semibold text-text text-lg">Client Portal</span>
        </div>

        {/* Center navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#features"
            className="text-text/70 hover:text-primary transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-text/70 hover:text-primary transition"
          >
            How it Works
          </a>

          <a
            href="#testimonials"
            className="text-text/70 hover:text-primary transition"
          >
            Testimonials
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="/sign-in" className="text-text/80 hover:text-text text-sm">
            Sign In
          </a>

          <a
            href="/sign-up"
            className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg font-medium text-white text-sm transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
