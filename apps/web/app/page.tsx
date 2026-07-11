import { Hero } from "@/features/hero/components/Hero";
import { TrustBar } from "@/features/home/components/TrustBar";
import { About } from "@/features/home/components/About";
import { Services } from "@/features/home/components/Services";
import { Process } from "@/features/home/components/Process";
import { Cases } from "@/features/home/components/Cases";
import { Testimonials } from "@/features/home/components/Testimonials";
import { Stats } from "@/features/home/components/Stats";
import { FAQ } from "@/features/home/components/FAQ";
import { CTA } from "@/features/home/components/CTA";
import { Contact } from "@/features/home/components/Contact";
import { Footer } from "@/features/home/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <Cases />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}