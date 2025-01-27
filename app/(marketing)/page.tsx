import CallToAction from "@/components/marketing/CallToAction";
import Features from "@/components/marketing/Features";
import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
import Pricing from "@/components/marketing/Pricing";

export const metadata = {
  title: "Fol.io - Create Your Portfolio in Minutes",
  description:
    "Build and deploy your professional portfolio with zero friction. Zero coding required.",
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CallToAction />
    </main>
  );
}
