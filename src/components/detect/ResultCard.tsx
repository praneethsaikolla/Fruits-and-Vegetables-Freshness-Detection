import { CheckCircle, XCircle, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PredictionResult {
  foodName: string;
  isFresh: boolean;
  confidence: number;
  imageWithBox?: string;
}

interface ResultCardProps {
  result: PredictionResult;
  originalImage: string;
}

const ResultCard = ({ result, originalImage }: ResultCardProps) => {
  const displayImage = result.imageWithBox || originalImage;
  const confidencePercentage = Math.round(result.confidence * 100);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = displayImage;
    link.download = `freshsense-${result.foodName.toLowerCase()}-${Date.now()}.png`;
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "FreshSense Result",
          text: `${result.foodName} - ${result.isFresh ? "Fresh" : "Not Fresh"} (${confidencePercentage}% confidence)`,
          url: window.location.href,
        });
      } catch {
        // User cancelled sharing
      }
    }
  };

  return (
    <div className="result-card overflow-hidden animate-scale-in">
      {/* Image Section */}
      <div className="relative">
        <img
          src={displayImage}
          alt={`${result.foodName} analysis result`}
          className="w-full h-auto max-h-[350px] object-contain bg-muted/30"
        />
        {/* Freshness Badge Overlay */}
        <div className="absolute top-4 right-4">
          {result.isFresh ? (
            <div className="fresh-badge flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Fresh
            </div>
          ) : (
            <div className="rotten-badge flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Not Fresh
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6">
        {/* Food Name */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Detected Food</p>
            <h3 className="text-2xl font-bold text-foreground capitalize">
              {result.foodName}
            </h3>
          </div>
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
              result.isFresh
                ? "bg-success/10 text-success"
                : "bg-warning/10 text-warning"
            }`}
          >
            {result.isFresh ? (
              <CheckCircle className="w-8 h-8" />
            ) : (
              <XCircle className="w-8 h-8" />
            )}
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-foreground">Confidence</p>
            <p className="text-sm font-bold text-primary">
              {confidencePercentage}%
            </p>
          </div>
          <div className="confidence-bar">
            <div
              className="confidence-fill"
              style={{
                width: `${confidencePercentage}%`,
                background: result.isFresh
                  ? "var(--gradient-fresh)"
                  : "var(--gradient-rotten)",
              }}
            />
          </div>
        </div>

        {/* Status Message */}
        <div
          className={`p-4 rounded-xl mb-6 ${
            result.isFresh
              ? "bg-success/10 border border-success/20"
              : "bg-warning/10 border border-warning/20"
          }`}
        >
          <p
            className={`text-sm ${
              result.isFresh ? "text-success" : "text-warning"
            }`}
          >
            {result.isFresh
              ? "This produce appears to be fresh and suitable for consumption."
              : "This produce shows signs of deterioration. Consider checking quality before use."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="flex-1"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
          <Button variant="outline" className="flex-1" onClick={handleShare}>
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
