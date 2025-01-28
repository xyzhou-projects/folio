"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-semibold">
                {siteConfig.name}
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="#how-it-works"
                className="text-muted-foreground inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm hover:text-foreground"
              >
                How it Works
              </Link>
              <Link
                href="#features"
                className="text-muted-foreground inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-muted-foreground inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm hover:text-foreground"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden space-x-4 sm:ml-6 sm:flex sm:items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button>Start Building</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
