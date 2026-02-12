import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-muted/30">
          <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              The Soul of Bermondsey.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Discover the independent spirit of SE1. A curated guide to the artisans, chefs, and stories that make our neighborhood unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/directory">Browse Places</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/editorial">Read Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Editorial Preview */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-2">Latest Stories</h2>
                <p className="text-muted-foreground">Culture, food, and people.</p>
              </div>
              <Button variant="ghost" asChild>
                <Link href="/editorial">View all &rarr;</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholders for Editorial Cards */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-muted mb-4 rounded-md overflow-hidden relative">
                    {/* Image placeholder */}
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Food & Drink</span>
                    <h3 className="text-xl font-bold font-serif group-hover:underline decoration-primary/50 underline-offset-4 decoration-2 transition-all">
                      The Hidden History of Bermondsey Street
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Exploring the transformation from industrial leather tanning to London's culinary capital.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
