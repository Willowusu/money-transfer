// src/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Taptap Send. All rights reserved.
            </div>
        </footer>
    );
}
