import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EditorialPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1 container px-4 md:px-6 py-12">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
                        Editorial
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Stories from the heart of Bermondsey. Meet the makers, chefs, and artists who define our neighborhood.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Featured Hero Article */}
                    <div className="col-span-full md:col-span-2 group cursor-pointer relative aspect-[21/9] bg-muted rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
                        {/* Image placeholder */}
                        <div className="absolute inset-0 bg-secondary/20" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 text-white">
                            <span className="text-xs font-medium uppercase tracking-wider mb-2 block text-white/90">Feature</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                                The Renaissance of Maltby Street
                            </h2>
                            <p className="max-w-xl text-white/90 text-lg mb-6 line-clamp-2">
                                How a rope walk became one of London's most vibrant culinary destinations.
                            </p>
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                                Read Story
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Standard Article Cards */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Link href={`/editorial/story-${i}`} key={i} className="group flex flex-col">
                            <div className="aspect-[3/2] bg-muted mb-4 rounded-md overflow-hidden relative">
                                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                    <span className="text-primary">Culture</span>
                                    <span>&bull;</span>
                                    <span>5 min read</span>
                                </div>
                                <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">
                                    The Artisan of Tooley Street
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    Meeting the shoemaker who has been crafting bespoke leather boots for over 40 years.
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
