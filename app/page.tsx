import HeroSection from "../components/HeroSection";
import CoreServices from "../components/CoreServices";
import EnvironmentalCommitment from "../components/EnvironmentalCommitment";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 selection:text-primary pt-20">
      <HeroSection />
      <CoreServices />
      <EnvironmentalCommitment />
      <CTASection />
    </div>
  );
}
