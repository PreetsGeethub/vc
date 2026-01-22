import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { useEffect } from "react"
import Reveal from "../components/Reveal"
import FadeWrapper from "../components/FadeWrapper"

function ProjectDetails() {

  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) return <h1>Not found</h1>

  return (
    <>
      {/* HERO IMAGE */}
      <section className="
        relative w-full overflow-hidden
        h-[70vh] sm:h-[80vh] md:h-screen
      ">

        <img
          src={project.thumbnail}
          className="
            absolute inset-0 w-full h-full object-cover
            scale-110 hover:scale-100
            transition-transform duration-[3000ms] ease-in-out
          "
          alt={project.title}
        />

      </section>

      {/* CONTENT */}
      <section className="
        bg-white
        px-6 py-12

        md:px-16 md:py-20
      ">

        <Reveal>
          <h1 className="
            font-playfair 
            text-3xl sm:text-4xl md:text-5xl
          ">
            {project.title}
          </h1>

          <p className="
            font-inter text-gray-500 
            mt-2
            text-sm sm:text-base
          ">
            {project.subtitle}
          </p>

          <p className="
            font-inter 
            text-xs sm:text-sm
          ">
            {project.location}
          </p>
        </Reveal>

        {/* GALLERY */}
        {/* GALLERY */}
<div className="
  grid grid-cols-1 
  sm:grid-cols-2
  gap-2 md:gap-4 
  mt-12 md:mt-20
">

  {project.images.map((img, i) => (

    <FadeWrapper key={i}>

      <div className="w-full overflow-hidden">

        <img
          src={img}
          alt=""
          className="
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
    </>
  )
}

export default ProjectDetails
