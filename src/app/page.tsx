import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ROIComparison from "@/components/ROIComparison";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <HowItWorks />
        <ROIComparison />
        <CaseStudy />
        <Pricing />
        <Trust />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
