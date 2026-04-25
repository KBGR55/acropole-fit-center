import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Disciplines from "@/components/Disciplines/Disciplines";
import Benefits from "@/components/Benefits/Benefits";
import Plans from "@/components/Plans/Plans";
import Schedule from "@/components/Schedule/Schedule";
import Story from "@/components/Story/Story";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Benefits />
        <Plans />
        <Schedule />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
