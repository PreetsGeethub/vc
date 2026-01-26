import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Reveal from "../components/Reveal"
import ParallaxImage from "../components/ParallaxImage"

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <>
      <Navbar />

      {/* ABOUT TEXT SECTION */}
      <section
        className="
          bg-white
          min-h-[80vh]
          flex items-center justify-center
          px-6
        "
      >
        <div className="max-w-4xl text-center">

          <Reveal>
            <h1
              className="
                font-playfair
                mt-10
                text-4xl sm:text-5xl md:text-6xl
                mb-10
              "
            >
              About Us
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p
              className="
                font-inter
                text-gray-600
                text-sm sm:text-base md:text-lg
                leading-relaxed
              "
            >
              <strong>VirtuCasa</strong> is a design-driven furniture manufacturing
              and interior solutions company, offering end-to-end services from
              concept to execution.
              <br /><br />

              We specialize in the <strong>manufacturing of custom furniture</strong>,
              including wardrobes, modular kitchens, and TV units, crafted with
              precision, premium materials, and a strong focus on durability and
              functionality.
              <br /><br />

              In addition to manufacturing, we provide
              <strong> comprehensive interior design services</strong>, supported by
              <strong> advanced 3D design, high-quality renders, animations, and
              walkthroughs</strong> that allow clients to visualize their spaces
              with accuracy before execution.
              <br /><br />

              A defining strength of <strong>VirtuCasa</strong> is our
              <strong> VR Interactive Walkthrough service</strong>, which forms a
              core part of our design process. Through immersive virtual reality,
              clients can <strong>walk through their interiors in real time</strong>,
              experience spatial flow, scale, lighting, and materials, and make
              informed decisions before production begins. This significantly
              reduces revisions, improves clarity, and ensures complete design
              confidence.
              <br /><br />

              By combining <strong>in-house furniture manufacturing</strong>,
              <strong> advanced visualization</strong>, and
              <strong> VR-based design validation</strong>, <strong>VirtuCasa</strong>
              maintains full control over quality, timelines, and detailing —
              delivering interiors that are both technically sound and visually
              refined.
              <br /><br />

              At <strong>VirtuCasa</strong>, we design, visualize, and manufacture
              spaces with <strong>precision, clarity, and intent.</strong>
            </p>
          </Reveal>

        </div>
      </section>

      {/* FULL IMAGE SECTION */}
      <section className="w-full h-[80vh] md:h-screen overflow-hidden">
        <ParallaxImage
          src="/projects/Villa/one.png"
          alt="VirtuCasa Interior"
        />
      </section>

      <Footer />
    </>
  )
}

export default About
