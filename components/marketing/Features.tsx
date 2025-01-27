import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Save, Sliders } from "lucide-react";

const features = [
  {
    name: "Easy Builder",
    description: "Intuitive interface with pre-built templates",
    icon: Sliders,
  },
  {
    name: "Real-time Preview",
    description: "See changes instantly as you build",
    icon: Eye,
  },
  {
    name: "Auto-save",
    description: "Never lose your progress with automatic saving",
    icon: Save,
  },
];

export default function Features() {
  return (
    <div className="marketing-bg-gradient relative py-24" id="features">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything You Need
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.name}
                className="rounded-lg border border-gray-200 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/80"
              >
                <CardHeader>
                  <feature.icon
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                  <CardTitle className="mt-4">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
