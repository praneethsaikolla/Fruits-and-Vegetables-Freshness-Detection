import { Upload, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Image",
    description:
      "Drag & drop, browse files, or capture directly from your camera. We support JPG, PNG, and WebP formats.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analyzes",
    description:
      "Our CNN model processes the image, detecting the produce type and analyzing visual markers for freshness.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Get Results",
    description:
      "Receive detailed results including produce name, freshness status, confidence score, and visual bounding box.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three simple steps to
            <span className="gradient-text block mt-1">fresher produce</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process makes freshness detection accessible to
            everyone—no technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative inline-flex mb-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-fresh">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-6 w-12 h-12">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-full h-full text-primary/30"
                    >
                      <path
                        d="M5 12h14m0 0l-7-7m7 7l-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
