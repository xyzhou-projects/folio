import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="marketing-bg-gradient relative overflow-hidden">
      <div className="marketing-grid" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-foreground dark:text-white">
              Create Your Portfolio
            </span>{" "}
            <span className="marketing-gradient mt-2 block bg-clip-text text-transparent">
              in Minutes
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-center text-lg dark:text-gray-300">
            No coding required. Build, preview, and deploy your portfolio with
            just a few clicks.
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              size="lg"
              asChild
              className="min-w-[200px] transition-transform hover:scale-105"
            >
              <Link href="#">Start Building Free</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="min-w-[200px] transition-transform hover:scale-105"
            >
              <Link href="#">See Examples</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
