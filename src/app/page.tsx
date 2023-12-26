import CTA from "@/components/home/CTA";
import Clientel from "@/components/home/Clientel";
import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main
      //  style={{ zIndex: "10" }}
      className="flex overflow-hidden min-h-screen flex-col items-center justify-between py-24  "
    >
      <Hero />
      <Features />
      <Clientel />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
  );
}
