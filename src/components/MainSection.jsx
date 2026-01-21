import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

function MainSection() {
  return (
    <section className="grid grid-cols-3 gap-10 p-16">

      {projects.map(p => (
        <Link
          key={p.id}
          to={`/project/${p.slug}`}
        >
          <ProjectCard
            title={p.title}
            subtitle={p.subtitle}
            image={p.thumbnail}
            className="rounded-lg"
          />

        </Link>
      ))}

    </section>
  )
}

export default MainSection
