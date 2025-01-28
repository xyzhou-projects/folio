import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://usefolio.online"),
  title: {
    template: "UseFolio | %s",
    default: "UseFolio - Create Your Portfolio in Minutes",
  },
  description:
    "Build and deploy your professional portfolio with no coding required.",
  keywords: [
    "portfolio builder",
    "web portfolio",
    "personal website",
    "no-code portfolio",
  ],
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
        <Analytics />
      </body>
    </html>
  );
}
