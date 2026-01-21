import React from 'react'

function ProjectCard({ 
  title, 
  subtitle, 
  image, 
  className = "" 
}) {
  return (
    <div 
      className={`relative overflow-hidden cursor-pointer group ${className}`}
    >

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="
          w-full h-72 object-cover
          transition-transform duration-700 ease-in-out
          group-hover:scale-105
        "
      />

      {/* Text overlay */}
      <div
        className="
          absolute inset-0 flex flex-col 
          items-center justify-center
          bg-black/30
          text-white
          transition-opacity duration-500
          group-hover:opacity-0
        "
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm tracking-wide">{subtitle}</p>
      </div>
    </div>
  )
}

export default ProjectCard

