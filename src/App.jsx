import { ScrollTrigger } from "gsap/all";
import Footer from "./components/navigations/Footer";
import Navbar from "./components/navigations/Navbar";
import Lenis from "lenis";
import gsap from "gsap";
import SectionOne from "./components/sections/section1/SectionOne";
import Hero from "./components/sections/hero/Hero";
import Intro from "./components/sections/introduction/Intro";
import SectionTwo from "./components/sections/section2/SectionTwo";
import SectionThree from "./components/sections/section3/SectionThree";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

function App() {
  const refContainer = useRef(null);

  // ✅ Initialise Lenis UNE SEULE FOIS
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    lenis.on("scroll", ScrollTrigger.update);
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // ✅ Active GSAP ScrollTrigger pour l’effet horizontal
  useGSAP(() => {
    if (!refContainer.current) return;

    const panels = gsap.utils.toArray(".panel");
    if (!panels.length) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: refContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + refContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <div id="parallax" className="flex no-wrap w-[400%]" ref={refContainer}>
        {/* ✅ Chaque section dans un vrai <section className="panel"> */}
        <section className="panel">
          <Hero />
        </section>

        <section className="panel">
          <Intro />
        </section>

        <section className="panel">
          <SectionOne />
        </section>

        <section className="panel">
          <SectionTwo />
        </section>

        <section className="panel">
          <SectionThree />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
