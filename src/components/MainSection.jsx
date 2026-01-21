import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

function MainSection() {
  return (
    <section 
      className="
        bg-[rgb(244,245,245)]
        grid grid-cols-2 gap-10 
        p-16
      "
    >

      {projects.map((p, i) => (
        <Reveal key={p.id} delay={i * 150}>
          <Magnetic>
            <Link to={`/project/${p.slug}`}>
              <ProjectCard
                title={p.title}
                subtitle={p.subtitle}
                image={p.thumbnail}
                className="rounded-lg"
              />
            </Link>
          </Magnetic>
        </Reveal>
      ))}

    </section>
  )
}

export default MainSection
