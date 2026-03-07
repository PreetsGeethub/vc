import { Link } from "react-router-dom";

function FeaturedBlog({ blog }) {
  const preview = blog.sections.find(s => s.type === "paragraph");

  return (
    <Link to={`/blog/${blog.slug}`} className="block group">
      <section className="px-6 py-1 cursor-pointer">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-xl relative">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-500"></div>
          </div>

          {/* TEXT */}
          <div className="max-w-xl">

            <h2 className="font-playfair text-2xl mb-6 leading-tight text-left">
              {blog.title}
            </h2>

            <p
              className="font-inter text-lg leading-relaxed mb-8 text-left"
              style={{ color: "rgb(50, 42, 34)" }}
            >
              {preview?.text}
            </p>

            <span className="border border-black px-7 py-3 font-inter text-xs tracking-[0.2em] uppercase transition-all duration-300 inline-block group-hover:bg-black group-hover:text-white">
              Read More...
            </span>

          </div>

        </div>

      </section>
    </Link>
  );
}

export default FeaturedBlog;