import About from "@/components/LandingPage/About";
import AllYouNeedToKnow from "@/components/LandingPage/AllYouNeedToKnow";
import BecomeAnAgent from "@/components/LandingPage/BecomeAnAgent";
import CountriesWeOperate from "@/components/LandingPage/CountriesWeOperate";
import HeroSection from "@/components/LandingPage/HeroSection";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import HowSurroWorks from "@/components/LandingPage/HowSurroWorks";
import Footer from "@/components/LandingPage/Layout/Footer";
import Navabar from "@/components/LandingPage/Layout/Navabar";
import Pricing from "@/components/LandingPage/Pricing";
import Testimonals from "@/components/LandingPage/Testimonals/Testimonals";
import WhySurroSantara from "@/components/LandingPage/WhySurroSantara";

export default function LandingPage() {
  return (
    <main>
      <Navabar />
      <div className="h-[var(--navbar-height)]" />
      <HeroSection />
      <About />
      {/* <CountriesWeOperate /> */}
      <HowItWorks />
      <BecomeAnAgent />
      {/* <WhySurroSantara /> */}
      {/* <HowSurroWorks /> */}
      <Pricing />
      <Testimonals />
      <AllYouNeedToKnow />
      {/* <Footer />  */}
    </main>
  );
}
