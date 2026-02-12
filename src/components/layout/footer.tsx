import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t bg-muted/40">
            <div className="container px-4 md:px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex flex-col gap-2">
                    <Link href="/" className="text-lg font-serif font-bold tracking-tight">
                        Bermondish.
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        A curated guide to the finest dining, culture, and stories from Bermondsey.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Explore</h3>
                        <Link href="/editorial" className="text-muted-foreground hover:text-foreground">
                            Editorial
                        </Link>
                        <Link href="/directory" className="text-muted-foreground hover:text-foreground">
                            Directory
                        </Link>
                        <Link href="/collections" className="text-muted-foreground hover:text-foreground">
                            Collections
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Company</h3>
                        <Link href="/about" className="text-muted-foreground hover:text-foreground">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                            Contact
                        </Link>
                        <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                            Privacy
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Social</h3>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Instagram
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Twitter
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Newsletter
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-t py-6">
                <div className="container px-4 md:px-6 flex items-center justify-between text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Bermondish. All rights reserved.</p>
                    <p>Made in Bermondsey.</p>
                </div>
            </div>
        </footer>
    );
}
