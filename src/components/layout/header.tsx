import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-serif font-bold tracking-tight">Bermondish.</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/editorial" className="transition-colors hover:text-primary">
                        Editorial
                    </Link>
                    <Link href="/directory" className="transition-colors hover:text-primary">
                        Directory
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-primary">
                        About
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="hidden md:flex">
                        Subscribe
                    </Button>
                    <Button size="sm">List a Place</Button>
                </div>
            </div>
        </header>
    );
}
