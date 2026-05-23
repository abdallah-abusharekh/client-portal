import Logo from "@/src/shared/components/Logo";
import { Container } from "@/src/shared/components/Container";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-gray-200 border-t">
      <Container>
        <div className="gap-12 grid md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo />
              <span className="font-semibold text-text text-lg">
                Client Portal
              </span>
            </div>

            <p className="max-w-xs text-text/70 text-sm leading-relaxed">
              The modern platform for client-freelancer collaboration
            </p>
          </div>
          <div className="flex flex-wrap gap-12 sm:grid sm:grid-cols-3">
            <div>
              <h4 className="mb-4 font-semibold text-text">Product</h4>

              <ul className="space-y-3 text-text/70 text-sm">
                <li>
                  <a href="#features" className="hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-text">Company</h4>

              <ul className="space-y-3 text-text/70 text-sm">
                <li>
                  <a href="#about" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-text">Legal</h4>

              <ul className="space-y-3 text-text/70 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-12 border-gray-200 border-t"></div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-6">
          <p className="text-text/60 text-sm">
            © 2024 Client Portal. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-text/60 text-lg">
            <a href="#" className="hover:text-primary">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-primary">
              <FaLinkedin />
            </a>

            <a href="#" className="hover:text-primary">
              <FaGithub />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
