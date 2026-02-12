import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, MapPin, DollarSign } from "lucide-react";
import { getAllRestaurants, createSlug } from "@/lib/data";

export default async function DirectoryPage() {
    const restaurants = getAllRestaurants();

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">
                <section className="bg-muted/30 border-b">
                    <div className="container px-4 md:px-6 py-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
                            The Directory
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Curated listings of the best restaurants, cafes, and bars in Bermondsey.
                        </p>

                        {/* Search / Filter Bar */}
                        <div className="max-w-2xl mx-auto flex gap-2 p-2 bg-background rounded-full border shadow-sm">
                            <div className="flex-1 flex items-center px-4 gap-2">
                                <Search className="w-4 h-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search places..."
                                    className="flex-1 bg-transparent border-none outline-none text-sm h-10"
                                />
                            </div>
                            <Button className="rounded-full px-8">Search</Button>
                        </div>

                        {/* Quick Filters */}
                        <div className="flex flex-wrap justify-center gap-2 mt-6">
                            {["Coffee", "Fine Dining", "Pubs", "Cocktails", "Brunch"].map(tag => (
                                <button key={tag} className="text-sm px-3 py-1 bg-background border rounded-full hover:border-primary hover:text-primary transition-colors">
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container px-4 md:px-6 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {restaurants.map((place) => (
                            <Link href={`/directory/${createSlug(place.name)}`} key={place.name} className="group block">
                                <div className="aspect-[4/3] bg-muted mb-4 rounded-lg overflow-hidden relative">
                                    {/* Image placeholder */}
                                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors" />
                                    {place.rating && (
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary">
                                            {place.rating} ★
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-serif font-bold group-hover:text-primary transition-colors">
                                            {place.name}
                                        </h3>
                                        <div className="flex text-xs text-muted-foreground gap-0.5">
                                            {place.price_range || "££"}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground flex items-center gap-1 line-clamp-1">
                                        <MapPin className="w-3 h-3 flex-shrink-0" /> {place.address}
                                    </p>
                                    <div className="text-xs text-muted-foreground pt-1 flex gap-2 flex-wrap">
                                        {place.cuisine?.slice(0, 3).map(c => (
                                            <span key={c} className="px-2 py-0.5 bg-muted rounded">{c}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
