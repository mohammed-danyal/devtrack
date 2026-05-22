"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-[var(--foreground)] hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold">
            D
          </div>
          <span className="hidden sm:inline">DevTrack</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://github.com/Priyanshu-byte-coder/devtrack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="#features"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Showcase
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="/api/auth/signin/github?callbackUrl=/dashboard"
            className="btn-primary text-sm"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
