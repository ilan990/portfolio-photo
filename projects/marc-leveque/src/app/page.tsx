import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
      </main>
    </>
  );
}
