import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ImageUploadZone from "@/components/detect/ImageUploadZone";
import ResultCard, { PredictionResult } from "@/components/detect/ResultCard";
import { Button } from "@/components/ui/button";
import { Scan, History, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// Mock prediction function - in production, this would call your Python API
const mockPredict = async (): Promise<PredictionResult> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock results - randomly return fresh or rotten
  const foods = [
    "Apple",
    "Banana",
    "Orange",
    "Tomato",
    "Lettuce",
    "Carrot",
    "Pepper",
    "Cucumber",
  ];
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  const isFresh = Math.random() > 0.3;
  const confidence = 0.85 + Math.random() * 0.14; // 85-99%

  return {
    foodName: randomFood,
    isFresh,
    confidence,
  };
};

const DetectPage = () => {
  const [selectedImage, setSelectedImage] = useState<{
    file: File;
    preview: string;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleImageSelect = (file: File, preview: string) => {
    setSelectedImage({ file, preview });
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      // In production, you would send the image to your Python backend:
      // const formData = new FormData();
      // formData.append('image', selectedImage.file);
      // const response = await fetch('/api/predict', { method: 'POST', body: formData });
      // const data = await response.json();

      const predictionResult = await mockPredict();
      setResult(predictionResult);

      toast({
        title: "Analysis Complete",
        description: `Detected ${predictionResult.foodName} - ${predictionResult.isFresh ? "Fresh" : "Not Fresh"}`,
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewScan = () => {
    setSelectedImage(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Freshness Detection
            </h1>
            <p className="text-muted-foreground">
              Upload an image of any fruit or vegetable to get instant freshness
              analysis powered by our AI model.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Upload */}
            <div>
              <div className="glass-card rounded-2xl p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-foreground">
                    Upload Image
                  </h2>
                  {selectedImage && result && (
                    <Button variant="ghost" size="sm" onClick={handleNewScan}>
                      New Scan
                    </Button>
                  )}
                </div>

                <ImageUploadZone
                  onImageSelect={handleImageSelect}
                  isLoading={isAnalyzing}
                />

                {/* Analyze Button */}
                {selectedImage && !result && (
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full mt-6"
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <span className="animate-spin mr-2">⚙️</span>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Scan className="w-5 h-5" />
                        Analyze Freshness
                      </>
                    )}
                  </Button>
                )}

                {/* Tips */}
                <div className="mt-6 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Tips for best results
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Use well-lit images with clear visibility</li>
                        <li>• Focus on a single item for accuracy</li>
                        <li>• Avoid blurry or heavily filtered images</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex items-center gap-4 mt-6">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/history">
                    <History className="w-4 h-4" />
                    View History
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Results */}
            <div>
              {result && selectedImage ? (
                <ResultCard
                  result={result}
                  originalImage={selectedImage.preview}
                />
              ) : (
                <div className="glass-card rounded-2xl p-8 h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Scan className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Results will appear here
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Upload an image and click "Analyze Freshness" to see
                    detailed results about your produce.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetectPage;
