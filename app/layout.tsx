import { ThemeProvider } from "@/components/shared/ThemeProvider";
import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourcesans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"], // Medium, Semibold, Bold
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fol.io - Portfolio Builder",
  description:
    "Create and deploy your professional portfolio in minutes with zero friction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourcesans.variable} ${outfit.variable} font-body min-h-screen bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
