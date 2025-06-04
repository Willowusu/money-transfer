// src/pages/LandingPage.tsx
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import RatesSection from "@/components/RatesSection";
import MobileMoneySection from "@/components/MobileMoney";
import TestimonialSection from "@/components/Testimonial";
import Login from "@/components/Login";

export default function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <RatesSection />
      <MobileMoneySection />
      <TestimonialSection />
      <Login />
    </Layout>
  );
}
