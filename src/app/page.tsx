import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import Calculator from "@/components/Calculator";
import Steps from "@/components/Steps";
import Payments from "@/components/Payments";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Comparison />
      <Calculator />
      <Steps />
      <Payments />
      <Features />
      <Footer />
    </main>
  );
}
