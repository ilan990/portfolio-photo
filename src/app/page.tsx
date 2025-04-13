import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FAQSection from '@/components/sections/FAQSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PortfolioSection />
        <ProcessSection />
        <FAQSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
