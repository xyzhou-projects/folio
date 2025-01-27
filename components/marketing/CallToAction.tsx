import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          <span className="block">Start Building Your Portfolio Today</span>
        </h2>
        <p className="text-white/90">No credit card required to start</p>

        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="transition-transform hover:scale-105"
          >
            <Link href="#">Start Building Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
