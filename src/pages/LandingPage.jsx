// src/pages/LandingPage.tsx
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import RatesSection from "@/components/RatesSection";

export default function LandingPage() {
    return (
        <Layout>
            <HeroSection />
            <RatesSection />
        </Layout>
    );
}
