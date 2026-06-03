import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Outcomes } from "@/components/site/Outcomes";
import { Program } from "@/components/site/Program";
import { Tools } from "@/components/site/Tools";
import { Audience } from "@/components/site/Audience";
import { Compare } from "@/components/site/Compare";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { Pricing } from "@/components/site/Pricing";
import { Teacher } from "@/components/site/Teacher";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Outcomes />
        <Program />
        <Tools />
        <Audience />
        <Compare />
        <LeadMagnet id="gids" />
        <Pricing />
        <Teacher />
        <Reviews />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
