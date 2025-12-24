import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { History, Search, Filter, Calendar, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

// Mock history data - in production, this would come from your database
const mockHistory = [
  {
    id: "1",
    foodName: "Apple",
    isFresh: true,
    confidence: 0.97,
    createdAt: "2024-01-15T10:30:00Z",
    imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    foodName: "Banana",
    isFresh: false,
    confidence: 0.92,
    createdAt: "2024-01-14T14:20:00Z",
    imageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    foodName: "Tomato",
    isFresh: true,
    confidence: 0.95,
    createdAt: "2024-01-13T09:15:00Z",
    imageUrl: "https://images.unsplash.com/photo-1546470427-227c7369b839?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    foodName: "Orange",
    isFresh: true,
    confidence: 0.98,
    createdAt: "2024-01-12T16:45:00Z",
    imageUrl: "https://images.unsplash.com/photo-1547514701-42782101795e?w=200&h=200&fit=crop",
  },
];

const HistoryPage = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Detection History
              </h1>
              <p className="text-muted-foreground">
                View and manage your past freshness analyses
              </p>
            </div>
            <Button variant="default" asChild>
              <Link to="/detect">New Detection</Link>
            </Button>
          </div>

          {/* Filters Bar */}
          <div className="glass-card rounded-xl p-4 mb-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by food name..."
                  className="w-full h-10 pl-10 pr-4 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4" />
                  Date Range
                </Button>
              </div>
            </div>
          </div>

          {/* History Grid */}
          {mockHistory.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockHistory.map((item) => (
                <div
                  key={item.id}
                  className="result-card overflow-hidden hover-lift group"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.foodName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      {item.isFresh ? (
                        <span className="fresh-badge text-xs">Fresh</span>
                      ) : (
                        <span className="rotten-badge text-xs">Not Fresh</span>
                      )}
                    </div>
                    <button
                      className="absolute top-3 left-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                      aria-label="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground capitalize">
                        {item.foodName}
                      </h3>
                      <span className="text-sm font-medium text-primary">
                        {Math.round(item.confidence * 100)}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(item.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-12 text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <History className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No history yet
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Your detection history will appear here once you start analyzing
                produce.
              </p>
              <Button variant="default" asChild>
                <Link to="/detect">Start Detecting</Link>
              </Button>
            </div>
          )}

          {/* Load More */}
          {mockHistory.length > 0 && (
            <div className="text-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HistoryPage;
