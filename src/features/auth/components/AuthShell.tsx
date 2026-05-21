import type { ReactNode } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  children: ReactNode;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex justify-center items-center bg-primary rounded-xl w-10 h-10">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="5" y="7" width="14" height="12" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M9 11h6M9 15h6" />
        </svg>
      </div>
      <p className="font-semibold text-slate-900 text-xl tracking-tight">
        ClientPortal
      </p>
    </div>
  );
}

export default function AuthShell({
  children,
  title,
  subtitle,
  ctaLabel = "Learn More",
  ctaHref = "/",
}: Props) {
  return (
    <main className="bg-slate-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <section className="relative flex flex-col bg-slate-50 p-6 sm:p-8 overflow-hidden">
          <div className="z-10 relative">
            <BrandMark />
          </div>

          <div className="z-10 relative flex flex-1 justify-center items-center py-8">
            <div className="w-full max-w-md">{children}</div>
          </div>

          <p className="z-10 relative text-slate-500 text-xs">
            Terms and conditions - Privacy policy
          </p>
        </section>

        <section className="hidden relative lg:flex justify-center items-center bg-linear-to-br from-[#76b8ff] via-[#c2dfff] to-[#d7eaff] px-14 py-16 overflow-hidden">
          <div className="-top-20 -right-20 absolute bg-sky-200/45 blur-3xl rounded-full w-72 h-72" />
          <div className="-bottom-24 -left-16 absolute bg-blue-100/45 blur-3xl rounded-full w-80 h-80" />

          <div className="z-10 relative flex flex-col w-full max-w-xl min-h-105">
            <div className="mt-12">
              <p className="mb-4 font-semibold text-slate-500 text-xs uppercase tracking-[0.2em]">
                Client Portal Suite
              </p>

              <h1 className="mb-3 font-bold text-slate-900 text-5xl leading-[1.05] tracking-tight">
                {title}
              </h1>
              <p className="max-w-sm text-slate-600 text-lg leading-relaxed">
                {subtitle}
              </p>
            </div>
            <div className="mt-6">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 pb-1 border-slate-800 border-b font-semibold text-slate-900 text-sm"
              >
                {ctaLabel}
                <span aria-hidden="true">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>

          <div className="right-20 bottom-20 absolute flex justify-center items-center bg-transparent rounded-3xl w-44 h-44 rotate-6">
            <svg
              viewBox="0 0 24 24"
              className="w-46 h-46 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="5" y="7" width="14" height="12" rx="2" />
              <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
              <path d="M9 11h6M9 15h6" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
}
