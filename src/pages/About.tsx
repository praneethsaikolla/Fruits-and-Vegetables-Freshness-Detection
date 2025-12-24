import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Globe,
  Leaf,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const stats = [
  { label: "Detections Made", value: "2.5M+", icon: TrendingUp },
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Countries", value: "120+", icon: Globe },
  { label: "Accuracy Rate", value: "99.2%", icon: Award },
];

const values = [
  {
    icon: Target,
    title: "Precision First",
    description:
      "We obsess over accuracy. Our models are continuously trained on real-world data to ensure reliable results.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "By reducing food waste, we're contributing to a more sustainable future for our planet.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Quality produce detection should be available to everyone—from home cooks to enterprise supply chains.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                About FreshSense
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Fighting food waste with
                <span className="gradient-text block mt-2">
                  artificial intelligence
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to reduce global food waste by making
                freshness detection accessible, accurate, and instant. Our
                AI-powered platform helps consumers and businesses make smarter
                decisions about produce quality.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Born from a simple observation
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    FreshSense started when our founders noticed how much
                    perfectly good produce was being discarded—both in retail
                    environments and at home—simply due to uncertainty about
                    freshness.
                  </p>
                  <p>
                    We realized that computer vision and machine learning had
                    advanced to the point where we could build something
                    genuinely useful: an AI that could analyze produce images
                    and provide instant, reliable freshness assessments.
                  </p>
                  <p>
                    Today, FreshSense is used by thousands of businesses and
                    consumers worldwide, helping prevent millions of pounds of
                    food waste each year while ensuring quality and safety.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center">
                  <Leaf className="w-32 h-32 text-primary/30" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-success/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                What drives us every day
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="result-card p-6 lg:p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to join the movement?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start detecting freshness today and be part of the solution to
                global food waste.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/detect">
                    Try FreshSense Free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
