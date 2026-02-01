import { useRef } from "react"

function ProjectCard({
  title,
  subtitle,
  thumbnail
}) {

  const imgRef = useRef(null)

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const moveX = (x / rect.width - 0.5) * 20
    const moveY = (y / rect.height - 0.5) * 20

    imgRef.current.style.transform =
      `translate(${moveX}px, ${moveY}px) scale(1.05)`
  }

  const reset = () => {
    imgRef.current.style.transform =
      "translate(0,0) scale(1)"
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        relative w-full 
        h-[280px]           /* mobile: rectangular */
        md:h-[420px]        /* desktop: original tall */
        overflow-hidden group
      "
    >

      {/* IMAGE */}
      <img
        ref={imgRef}
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="
          w-full h-full object-cover
          transition-transform duration-500 ease-out
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0 flex flex-col 
          items-center justify-center
          bg-black/30 text-white
          transition-opacity duration-500
          group-hover:opacity-0
        "
      >
        <h2 className="font-playfair text-2xl
  text-center
  leading-tight
  max-w-[80%]">
          {title}
        </h2>
        <p className="font-inter text-sm text-center">
          {subtitle}
        </p>
      </div>

    </div>
  )
}

export default ProjectCard