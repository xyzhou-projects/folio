import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "Choose from professional templates",
  "Real-time preview",
  "Save progress locally",
  "No time limit",
  "Instant deployment",
  "Your custom subdomain (you.fol.io)",
  "Export your code",
];

export default function Pricing() {
  return (
    <div className="marketing-bg-gradient relative py-24" id="pricing">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Simple, One-time Payment
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Start for free, pay only when you&apos;re ready to launch.
          </p>
        </div>

        <Card className="mt-12 overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800/80">
          <CardHeader className="relative bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 px-6 py-8 sm:p-10 sm:pb-6">
            <CardTitle className="text-3xl font-extrabold text-white">
              Professional
            </CardTitle>
            <CardDescription className="mt-4 text-white">
              <span className="text-5xl font-extrabold">$X</span>
              <span className="text-base font-medium">/one-time</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-8 pt-6 sm:p-10 sm:pt-6">
            <ul className="mt-6 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check
                      className="h-6 w-6 text-blue-500 dark:text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="px-6 pb-8 pt-6 sm:px-10 sm:pt-6">
            <Button
              className="w-full transition-transform hover:scale-105"
              size="lg"
            >
              Start Building Free
            </Button>
          </CardFooter>
        </Card>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Pay only when you&apos;re ready to deploy
        </p>
      </div>
    </div>
  );
}
