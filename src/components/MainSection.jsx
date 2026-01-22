import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

function MainSection() {
  return (
    <section
      className="
        bg-[rgb(244,245,245)]
        space-y-4

        px-6 py-10          /* mobile */
        md:px-16 md:py-20   /* desktop */
      "
    >

      {/* ROW 1 */}
      <div className="
        grid gap-3
        grid-cols-1
        md:grid-cols-2
      ">

        <Link to={`/project/${projects[0].slug}`}>
          <ProjectCard {...projects[0]} type="vertical" />
        </Link>
        <Link to={`/project/${projects[6].slug}`}>
          <ProjectCard {...projects[6]} type="vertical" />
        </Link>
        

      </div>
      

      {/* ROW 2 */}
      <div className="
        grid gap-3
        grid-cols-1
        md:grid-cols-[1.5fr_1fr]
      ">

        <Link to={`/project/${projects[2].slug}`}>
          <ProjectCard {...projects[2]} type="vertical" />
        </Link>

        <Link to={`/project/${projects[3].slug}`}>
          <ProjectCard {...projects[3]} type="horizontal" />
        </Link>

      </div>

      {/* ROW 3 */}
      <div className="
        grid gap-3
        grid-cols-1
        md:grid-cols-[1fr_1.5fr]
      ">

        <Link to={`/project/${projects[4].slug}`}>
          <ProjectCard {...projects[4]} />
        </Link>

        <Link to={`/project/${projects[5].slug}`}>
          <ProjectCard {...projects[5]} />
        </Link>

      </div>
      <div className="
        grid gap-3
        grid-cols-1
        md:grid-cols-2
      ">

        
        <Link to={`/project/${projects[1].slug}`}>
          <ProjectCard {...projects[1]} type="horizontal" />
        </Link>


      </div>

    </section>
  )
}

export default MainSection
