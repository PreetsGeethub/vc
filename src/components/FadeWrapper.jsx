import { useEffect, useRef, useState } from "react"

function FadeWrapper({ children }) {

  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal-card ${visible ? "show" : ""}`}
    >
      {children}
    </div>
  )
}

export default FadeWrapper
