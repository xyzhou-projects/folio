import CallToAction from "@/components/marketing/CallToAction";
import Features from "@/components/marketing/Features";
import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
import Pricing from "@/components/marketing/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Portfolio in Minutes",
  description:
    "Build and deploy your professional portfolio with no coding required. Free to start, pay only when you're ready to launch.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "UseFolio",
            applicationCategory: "Portfolio Builder",
            description:
              "Build and deploy your professional portfolio with no coding required",
            url: "https://usefolio.online",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CallToAction />
      </main>
    </>
  );
}
