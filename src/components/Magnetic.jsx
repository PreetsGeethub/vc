import { useRef } from "react"

function Magnetic({ children }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `
      translate(${x * 0.15}px, ${y * 0.15}px)
      scale(1.03)
    `
  }

  const reset = () => {
    ref.current.style.transform = "translate(0,0) scale(1)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  )
}

export default Magnetic
