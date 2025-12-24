import { Scan, Clock, Shield, BarChart3, Camera, Cloud } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "AI-Powered Detection",
    description:
      "Advanced CNN model trained on thousands of images to detect freshness with 99.2% accuracy.",
  },
  {
    icon: Clock,
    title: "Instant Results",
    description:
      "Get freshness analysis in under 2 seconds. No waiting, no complicated setup required.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Ensure your produce meets quality standards. Perfect for retailers and restaurants.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Track your detection history and get insights into produce quality over time.",
  },
  {
    icon: Camera,
    title: "Multi-Input Support",
    description:
      "Upload images, use drag & drop, or capture directly from your camera on mobile.",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready API",
    description:
      "RESTful API for seamless integration with your existing systems and workflows.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need for
            <span className="gradient-text block mt-1">
              produce quality control
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From individual consumers to enterprise supply chains, FreshSense
            provides the tools you need to ensure produce freshness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group result-card p-6 lg:p-8 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
