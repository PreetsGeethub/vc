import { useState } from "react";
import FeaturedPost from "./FeaturedBlog";
import Reveal from "../components/Reveal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactCTA from "./ContactCTA";
import { blogs } from "../data/blogs";

const CATEGORIES = [
  { key: "all", label: "All", mobileLabel: "All" },
  { key: "interior", label: "Interior Visualization & Design", mobileLabel: "Interior Design" },
  { key: "archviz", label: "Architectural Visualization", mobileLabel: "ArchViz" },
  { key: "vr", label: "Virtual Reality & Interactive", mobileLabel: "VR & Interactive" },
];

function BlogHero() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <div
      className="relative bg-scroll md:bg-fixed bg-cover bg-[center_top] md:bg-center"
      style={{
        backgroundImage: "url('/backgrounds/blogBg1.webp')",
        backgroundSize: "110% auto"
      }}
    >
      <div className="absolute inset-0 bg-[rgba(255,248,240,0.55)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.25)]"></div>

      <div className="relative z-10">
        <Navbar />

        {/* ================= HERO ================= */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">

            <Reveal>
              <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl mb-12 text-center text-[rgb(30,26,22)]">
                Blog
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <div className="max-w-5xl mx-auto bg-[rgba(255,255,255,0.6)] backdrop-blur-md p-6 sm:p-4 md:p-12 rounded-2xl shadow-lg">
                <p className="font-inter text-lg leading-relaxed text-[rgb(50,42,34)]">
                  At VirtuCasa, every space begins with an idea and evolves through precision,
                  craftsmanship, and thoughtful design. Our journal explores interior trends,
                  custom furniture solutions, and spatial planning — along with our signature
                  VR walkthrough process that lets clients experience their spaces before execution.
                </p>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= CATEGORY TABS ================= */}
        <section className="px-4 pb-8">
          <div className="max-w-6xl mx-auto">

            {/* Mobile: 2x2 grid */}
            <div className="grid grid-cols-2 gap-2 sm:hidden">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`
                    font-inter text-sm
                    px-3 py-2.5 rounded-full
                    border transition-all duration-200
                    text-center
                    ${active === cat.key
                      ? "bg-[rgb(45,38,30)] text-white border-[rgb(45,38,30)]"
                      : "bg-[rgba(255,255,255,0.6)] text-[rgb(45,38,30)] border-[rgb(45,38,30)] hover:bg-[rgba(255,255,255,0.9)]"
                    }
                  `}
                >
                  {cat.mobileLabel}
                </button>
              ))}
            </div>

            {/* Desktop: horizontal row */}
            <div className="hidden sm:flex flex-wrap gap-3 justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`
                    font-inter text-sm md:text-base
                    px-5 py-2 rounded-full
                    border transition-all duration-200
                    ${active === cat.key
                      ? "bg-[rgb(45,38,30)] text-white border-[rgb(45,38,30)]"
                      : "bg-[rgba(255,255,255,0.6)] text-[rgb(45,38,30)] border-[rgb(45,38,30)] hover:bg-[rgba(255,255,255,0.9)]"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ================= BLOG POSTS ================= */}
        <section className="py-4 px-6">
          <div className="max-w-6xl mx-auto space-y-24">

            {filtered.length > 0 ? (
              filtered.map((blog) => (
                <Reveal key={blog.slug} delay={50}>
                  <FeaturedPost blog={blog} />
                </Reveal>
              ))
            ) : (
              <div className="text-center py-24">
                <p className="font-inter text-lg text-[rgb(70,60,50)]">
                  No posts in this category yet. Check back soon.
                </p>
              </div>
            )}

          </div>
        </section>

        <ContactCTA />
        <Footer />
      </div>
    </div>
  );
}

export default BlogHero;