// import { useParams } from "react-router-dom";
// import { blogs } from "../data/blogs";
// import ParallaxImage from "../components/ParallaxImage";

// function BlogDetailPage() {
//   const { slug } = useParams();
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) return <h1 className="p-10">Blog not found</h1>;

//   return (
//     <>
//       {/* ================= HERO ================= */}
//       <section className="relative w-full h-[85vh] overflow-hidden">

//   <div
//     className="
//       absolute inset-0
//       will-change-transform
//     "
//     style={{
//       transform: "translateY(0px)"
//     }}
//   >
//     <img
//       src={blog.coverImage}
//       alt={blog.title}
//       className="w-full h-full object-cover"
//     />
//   </div>

//   <div className="absolute inset-0 bg-black/50"></div>

//   <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
//     <h1 className="font-playfair text-white text-3xl md:text-4xl max-w-4xl leading-tight">
//       {blog.title}
//     </h1>
//   </div>

// </section>

//       {/* ================= DIARY STYLE ARTICLE ================= */}
//       {/* ================= HORIZONTAL EDITORIAL ARTICLE ================= */}
//       <section
//   className="relative bg-scroll md:bg-fixed bg-cover bg-center"
//   style={{
//     backgroundImage: "url('/backgrounds/blogBg3.webp')"
//   }}
// >

//   {/* Overlay */}
//   <div className="absolute inset-0 bg-[rgba(255,248,240,0.4)] md:bg-[rgba(255,248,240,0.3)] backdrop-blur-[2px]"></div>

//   {/* Content */}
//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-36">

//     <div
//       className="
//         bg-[rgba(255,255,255,0.65)] md:bg-[rgba(255,255,255,0.45)]
//         backdrop-blur-lg
//         rounded-2xl
//         shadow-2xl
//         px-6 sm:px-8 md:px-20
//         py-12 md:py-24
//       "
//     >

//       {blog.sections.map((section, i) => {

//         switch (section.type) {

//           // ===== HEADING =====
//           case "heading":
//             return (
//               <h2
//                 key={i}
//                 className="
//                   font-playfair
//                   text-2xl sm:text-3xl md:text-4xl
//                   mt-12 md:mt-20 mb-6 md:mb-8
//                   text-[rgb(35,30,25)]
//                 "
//               >
//                 {section.text}
//               </h2>
//             );

//           // ===== PARAGRAPH =====
//           case "paragraph":
//             return (
//               <p
//                 key={i}
//                 className="
//                   font-inter
//                   text-base sm:text-lg md:text-xl
//                   leading-relaxed
//                   mb-8 md:mb-10
//                 "
//                 style={{ color: "rgb(70,60,50)" }}
//               >
//                 {section.text}
//               </p>
//             );

//           // ===== LIST =====
//           case "list":
//             return (
//               <ul
//                 key={i}
//                 className="
//                   list-disc pl-5 md:pl-6
//                   mb-8 md:mb-10
//                   space-y-2 md:space-y-3
//                   text-base sm:text-lg md:text-xl
//                 "
//               >
//                 {section.items.map((item, j) => (
//                   <li key={j} className="font-inter">{item}</li>
//                 ))}
//               </ul>
//             );

//           // ===== NUMBERED =====
//           case "numberedList":
//             return (
//               <ol
//                 key={i}
//                 className="
//                   list-decimal pl-5 md:pl-6
//                   mb-8 md:mb-10
//                   space-y-2 md:space-y-3
//                   text-base sm:text-lg md:text-xl
//                 "
//               >
//                 {section.items.map((item, j) => (
//                   <li key={j} className="font-inter">{item}</li>
//                 ))}
//               </ol>
//             );

//           // ===== IMAGE =====
//           case "image":
//             return (
//               <figure key={i} className="my-16 md:my-28">

//                 <div
//                   className="
//                     w-full
//                     h-[40vh] sm:h-[50vh] md:h-[70vh]
//                     overflow-hidden
//                     rounded-xl
//                   "
//                 >
//                   <ParallaxImage
//                     src={section.src}
//                     alt={section.caption || "Blog image"}
//                   />
//                 </div>

//               </figure>
//             );

//           default:
//             return null;
//         }

//       })}

//     </div>
//   </div>
// </section>
//     </>
//   );
// }

// export default BlogDetailPage;




import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <h1 className="p-10">Blog not found</h1>;

  return (
    <>
      <Navbar/>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">

<img
  src={blog.coverImage}
  alt={blog.title}
  className="
    absolute inset-0
    w-full h-full
    object-cover
    object-top md:object-center
  "
/>

<div className="absolute inset-0 bg-black/50"></div>

<div className="relative z-10 flex items-center justify-center h-full text-center px-6">
  <h1 className="font-playfair text-white text-2xl md:text-5xl max-w-5xl leading-tight">
    {blog.title}
  </h1>
</div>

</section>

      {/* ================= DIARY ARTICLE ================= */}
      <section className="relative bg-[#FAFAF8]">

        {/* ⭐ WIDER CONTENT */}
        <div className="relative max-w-5xl md:max-w-6xl mx-auto px-6 py-24 md:py-36">

          {blog.sections.map((section, i) => {

            switch (section.type) {

              // ===== HEADING =====
              case "heading":
                return (
                  <h2
                    key={i}
                    className="
                      font-playfair
                      text-3xl md:text-6xl
                      mt-20 mb-10
                      text-[rgb(45,38,30)]
                    "
                  >
                    {section.text}
                  </h2>
                );

              // ===== PARAGRAPH =====
              case "paragraph":
                return (
                  <p
                    key={i}
                    className="
                      font-inter
                      text-lg md:text-4xl
                      leading-relaxed
                      mb-12
                    "
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
                    className="
                      list-disc pl-6
                      mb-12
                      space-y-3
                      text-lg md:text-4xl
                      text-[rgb(70,60,50)]
                    "
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
                    className="
                      list-decimal pl-6
                      mb-12
                      space-y-3
                      text-lg md:text-4xl
                      text-[rgb(70,60,50)]
                    "
                  >
                    {section.items.map((item, j) => (
                      <li key={j} className="font-inter">{item}</li>
                    ))}
                  </ol>
                );

              // ===== IMAGE =====
              case "image":
                return (
                  <figure key={i} className="my-24">

                    <div className="
                      w-full
                      h-full
                      bg-[rgba(255,255,255,0.55)]
                      p-1 md:p-6
                      rounded-xl
                    ">
                      <img
                        src={section.src}
                        alt={section.caption || "Blog image"}
                        className="
                          w-full
                          h-auto
                          object-contain
                          mx-auto
                        "
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
      <Footer/>
    </>
  );
}

export default BlogDetailPage;