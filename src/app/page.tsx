import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";  
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Works from "@/components/sections/Works";
import Choose from "@/components/sections/Choose";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <Gallery />
      <Works />
      <Choose />
    </main>
  );
}