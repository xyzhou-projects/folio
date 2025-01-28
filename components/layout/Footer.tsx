import { siteConfig } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-foreground">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-center">
                <Link
                  href="#features"
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href="#pricing"
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href="#how-it-works"
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-center">
                <Link
                  href="/blog"
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href="/faq"
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-center">
                <Link
                  href="/privacy"
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href="/terms"
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-muted mt-8 border-t pt-8">
          <p className="text-muted-foreground text-center text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
