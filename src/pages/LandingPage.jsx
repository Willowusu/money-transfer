// src/pages/LandingPage.tsx
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import RatesSection from "@/components/RatesSection";
import MobileMoneySection from "@/components/MobileMoney";
import TestimonialSection from "@/components/Testimonial";

export default function LandingPage() {
    return (
        <>
            <HeroSection />
            <RatesSection />
            <MobileMoneySection />
            <TestimonialSection />
        </>
    );
}
