import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { getAllRestaurants, getRestaurantBySlug, createSlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { MapPin, Phone, Globe, Calendar, DollarSign, Star } from "lucide-react";

export async function generateStaticParams() {
    const restaurants = getAllRestaurants();
    return restaurants.map((restaurant) => ({
        slug: createSlug(restaurant.name),
    }));
}

export default async function RestaurantPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const restaurant = getRestaurantBySlug(slug);

    if (!restaurant) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] bg-muted overflow-hidden">
                    {/* Image placeholder */}
                    <div className="absolute inset-0 bg-secondary/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 text-white">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {restaurant.cuisine?.map(c => (
                                    <span key={c} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium">
                                        {c}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                                {restaurant.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mb-6">
                                {restaurant.short_title}
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-primary fill-primary" />
                                    <span>{restaurant.rating} ({restaurant.review_count} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-5 h-5" />
                                    <span>{restaurant.price_range} - {restaurant.typical_spend_per_person}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container px-4 md:px-6 py-12 grid md:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">

                        {/* About */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">The Experience</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {restaurant.summary}
                            </p>

                            {restaurant.atmosphere_experience && (
                                <div className="mt-6 p-6 bg-muted/30 rounded-lg border">
                                    <h3 className="font-semibold mb-2">Atmosphere</h3>
                                    <p className="text-muted-foreground">{restaurant.atmosphere_experience}</p>
                                </div>
                            )}
                        </div>

                        {/* Highlights */}
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-bold mb-4">What Diners Love</h3>
                                <ul className="space-y-2">
                                    {restaurant.what_diners_love?.map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start text-muted-foreground">
                                            <span className="text-primary mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Popular Dishes</h3>
                                <div className="flex flex-wrap gap-2">
                                    {restaurant.popular_dishes?.map((dish, i) => (
                                        <span key={i} className="px-3 py-1 bg-muted rounded-md text-sm">
                                            {dish}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Honest Feedback */}
                        {restaurant.mixed_feedback && restaurant.mixed_feedback.length > 0 && (
                            <div>
                                <h3 className="text-lg font-bold mb-4">Honest Notes</h3>
                                <ul className="space-y-2">
                                    {restaurant.mixed_feedback.map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start text-muted-foreground">
                                            <span className="text-muted-foreground/60 mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar info */}
                    <aside className="space-y-8">
                        <div className="p-6 border rounded-lg shadow-sm space-y-6 sticky top-24">
                            <div>
                                <h3 className="font-bold mb-4">Details</h3>
                                <div className="space-y-4 text-sm">
                                    <div className="flex gap-3">
                                        <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                        <span>{restaurant.address}</span>
                                    </div>
                                    {restaurant.phone && (
                                        <div className="flex gap-3">
                                            <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                            <span>{restaurant.phone}</span>
                                        </div>
                                    )}
                                    {restaurant.menu && (
                                        <div className="flex gap-3">
                                            <Globe className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                                            <a href={`https://${restaurant.menu}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                                                View Menu
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Button className="w-full" asChild>
                                    <a href={`https://${restaurant.reservations}`} target="_blank" rel="noopener noreferrer">
                                        Book a Table
                                    </a>
                                </Button>
                            </div>

                            {restaurant.good_to_know && (
                                <div className="border-t pt-6">
                                    <h4 className="font-semibold mb-3">Good to Know</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        {restaurant.good_to_know.map((item, i) => (
                                            <li key={i}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {restaurant.top_tip && (
                                <div className="bg-primary/5 p-4 rounded-md border border-primary/20">
                                    <h4 className="font-semibold text-primary mb-1 text-sm">Insider Tip</h4>
                                    <p className="text-sm italic text-muted-foreground">
                                        "{restaurant.top_tip}"
                                    </p>
                                </div>
                            )}
                        </div>
                    </aside>
                </section>
            </main>
            <Footer />
        </div>
    );
}
