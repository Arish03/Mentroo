import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import CareerDomainsSection from "../components/CareerDomainsSection";
import AIGuideSection from "../components/AIGuideSection";
import ProcessSection from "../components/ProcessSection";
import ConsultantsSection from "../components/ConsultantsSection";
import ResourcesSection from "../components/ResourcesSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <CareerDomainsSection />
        <AIGuideSection />
        <ProcessSection />
        <ConsultantsSection />
        <ResourcesSection />
        <SuccessStoriesSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}