import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { GemsSection } from "../components/GemsSection";
import { SourcesSection } from "../components/SourcesSection";
import { TimeSavingsSection } from "../components/TimeSavingsSection";
import { PricingSection } from "../components/PricingSection";
import { TryNowSection } from "../components/TryNowSection";
import { SupportSection } from "../components/SupportSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <GemsSection />
        <SourcesSection />
        <TimeSavingsSection />
        <PricingSection />
        <TryNowSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
