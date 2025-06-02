// src/components/Header.tsx
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-green-600">Taptap Send</h1>
                <nav className="space-x-4 hidden md:block">
                    <a href="#features" className="text-gray-700 hover:text-green-600">Features</a>
                    <a href="#how-it-works" className="text-gray-700 hover:text-green-600">How It Works</a>
                    <a href="#support" className="text-gray-700 hover:text-green-600">Support</a>
                    <Button variant="default">Download</Button>
                </nav>
            </div>
        </header>
    );
}
