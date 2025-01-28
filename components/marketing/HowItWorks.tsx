import { Edit, LayoutTemplate, Rocket } from "lucide-react";

const steps = [
  {
    name: "Choose a Template",
    description: "Select from our professional templates",
    icon: LayoutTemplate,
  },
  {
    name: "Customize",
    description: "Add your content and make it yours",
    icon: Edit,
  },
  {
    name: "Deploy",
    description: "One click to go live with your portfolio",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative bg-white py-24 dark:bg-gray-900"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Build Your Portfolio in 3 Steps
          </p>
        </div>

        <div className="mt-20">
          <div className="grid gap-16 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.name} className="relative text-center">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-600 text-2xl font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div className="mt-6">
                    <step.icon
                      className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
                      {step.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
