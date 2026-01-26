import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { useEffect } from "react"
import Reveal from "../components/Reveal"
import FadeWrapper from "../components/FadeWrapper"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function ProjectDetails() {

  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | VirtuCasa`
    }
  }, [project])
  

  if (!project) return <h1>Not found</h1>

  return (
    <>
    <Navbar/>
      {/* HERO IMAGE */}
      <section
        className="
          relative w-full overflow-hidden
          h-[50vh]
          sm:h-[70vh]
          md:h-[60vh]
        "
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            absolute inset-0 w-full h-full object-cover
            scale-110 hover:scale-100
            transition-transform duration-[3000ms] ease-in-out
          "
        />

        {/* GRADIENT OVERLAY */}
        <div
          className="
            absolute bottom-0 left-0 w-full h-7
            bg-gradient-to-t from-white to-transparent
          "
        />
      </section>

      {/* CONTENT */}
      <section
        className="
          bg-white
          px-6 py-12
          md:px-16 md:py-20
        "
      >
        <Reveal>
          <h1
            className="
              font-playfair 
              text-3xl sm:text-4xl md:text-5xl
            "
          >
            {project.title}
          </h1>

          <p
            className="
              font-inter text-gray-500 
              mt-2
              text-sm sm:text-base
            "
          >
            {project.subtitle}
          </p>

          <p
            className="
              font-inter 
              text-xs sm:text-sm
            "
          >
            {project.location}
          </p>
        </Reveal>

        {/* GALLERY */}
        {/* GALLERY */}
        <div
          className="
    grid grid-cols-1
    sm:grid-cols-2
    gap-2 md:gap-4
    mt-12 md:mt-20
  "
        >
          {project.images.map((img, i) => (
            <FadeWrapper key={i}>
              <div className="hover-card w-full">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="
            hover-img
            w-full
            h-auto
            object-contain
          "
                />
              </div>
            </FadeWrapper>
          ))}
        </div>

      </section>
      <Footer/>
    </>
  )
}

export default ProjectDetails
