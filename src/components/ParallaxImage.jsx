import { useEffect, useRef } from "react"

function ParallaxImage({ src, alt }) {
  const imgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return

      const rect = imgRef.current.getBoundingClientRect()
      const offset = rect.top * 0.15

      imgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="
        w-full h-full object-cover
        transition-transform duration-300 ease-out
      "
    />
  )
}

export default ParallaxImage
