import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    setTimeout(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, 0);
  }, [slug]);

  if (!blog) return <h1 className="p-10">Blog not found</h1>;

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <h1 className="font-playfair text-white text-2xl md:text-5xl max-w-5xl leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <section className="relative bg-[#FAFAF8]">
        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">

          {blog.sections.map((section, i) => {

            switch (section.type) {

              // ===== HEADING =====
              case "heading":
                return (
                  <h2
                    key={i}
                    className="font-playfair text-2xl md:text-4xl mt-16 mb-8 text-[rgb(45,38,30)]"
                  >
                    {section.text}
                  </h2>
                );

              // ===== PARAGRAPH =====
              case "paragraph":
                return (
                  <p
                    key={i}
                    className="font-inter text-base md:text-lg leading-relaxed mb-8"
                    style={{ color: "rgb(70,60,50)" }}
                  >
                    {section.text}
                  </p>
                );

              // ===== BULLET LIST =====
              case "list":
                return (
                  <ul
                    key={i}
                    className="list-disc pl-6 mb-8 space-y-2 text-base md:text-lg text-[rgb(70,60,50)]"
                  >
                    {section.items.map((item, j) => (
                      <li key={j} className="font-inter">{item}</li>
                    ))}
                  </ul>
                );

              // ===== NUMBERED LIST =====
              case "numberedList":
                return (
                  <ol
                    key={i}
                    className="list-decimal pl-6 mb-8 space-y-2 text-base md:text-lg text-[rgb(70,60,50)]"
                  >
                    {section.items.map((item, j) => (
                      <li key={j} className="font-inter">{item}</li>
                    ))}
                  </ol>
                );

              // ===== IMAGE =====
              case "image":
                return (
                  <figure key={i} className="my-10">
                    <div className="overflow-hidden rounded-xl bg-white shadow-md">
                      <img
                        src={section.src}
                        alt={section.caption || "Blog image"}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </figure>
                );

              default:
                return null;
            }

          })}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BlogDetailPage;