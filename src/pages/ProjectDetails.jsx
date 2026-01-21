import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { useEffect } from "react"
import Reveal from "../components/Reveal"

function ProjectDetails() {

  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  // Always start from top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) return <h1>Not found</h1>

  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative h-screen w-full overflow-hidden">

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
      <section className="bg-white px-16 py-20">

        <Reveal>
          <h1 className="text-3xl font-semibold">
            {project.title}
          </h1>

          <p className="text-gray-500 mt-2">
            {project.subtitle}
          </p>
          <p className="text-gray-500 mt-2">
            {project.location}
          </p>
        </Reveal>

        {/* GALLERY */}
        <div className="grid grid-cols-2 gap-10 mt-20">

          {project.images.map((img, i) => (
            <Reveal key={i}>
              <img 
                src={img}
                alt=""
                className="
                  w-full object-cover
                  hover:scale-[1.03]
                  transition duration-[1500ms]
                "
              />
            </Reveal>
          ))}

        </div>

      </section>
    </>
  )
}

export default ProjectDetails
