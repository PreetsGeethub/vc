import FeaturedPost from "./FeaturedBlog";
import Reveal from "../components/Reveal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactCTA from "./ContactCTA";

function BlogHero() {
  return (
    <div
  className="
    relative
    bg-scroll md:bg-fixed
    bg-cover
    bg-[center_top] md:bg-center
  "
  style={{
    backgroundImage: "url('/backgrounds/blogBg1.webp')",
    backgroundSize: "110% auto"
  }}
>
      {/* ⭐ Global Warm Overlay */}
      <div className="absolute inset-0 bg-[rgba(255,248,240,0.55)]"></div>

      {/* ⭐ Vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.25)]"></div>

      <div className="relative z-10">
        <Navbar />

        {/* ================= HERO ================= */}
        <section className="py-32 px-6">

          <div className="max-w-6xl mx-auto">

            <Reveal>
              <h1 className="
                font-playfair
                text-5xl sm:text-6xl md:text-7xl
                mb-12
                text-center
                text-[rgb(30,26,22)]
              ">
                Blog
              </h1>
            </Reveal>

            {/* Intro Panel */}
            <Reveal delay={150}>
              <div className="
                max-w-5xl mx-auto
                bg-[rgba(255,255,255,0.6)]
                backdrop-blur-md
                p-6 sm:p-4 md:p-12
                rounded-2xl
                shadow-lg
              ">
                <p className="font-inter text-lg sm:text-4xl md:text-4xl leading-relaxed text-[rgb(50,42,34)]">
                  At VirtuCasa, every space begins with an idea and evolves through precision,
                  craftsmanship, and thoughtful design. Our journal explores interior trends,
                  custom furniture solutions, and spatial planning — along with our signature
                  VR walkthrough process that lets clients experience their spaces before execution.
                </p>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= BLOG POSTS ================= */}
        <section className="py-4 px-6">

          <div className="max-w-6xl mx-auto space-y-24">

          

            <Reveal delay={50}>
              <FeaturedPost />
            </Reveal>


          </div>

        </section>

        {/* <ContactCTA /> */}
        <Footer />
      </div>
    </div>
  );
}

export default BlogHero;