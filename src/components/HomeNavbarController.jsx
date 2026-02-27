import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"

function HomeNavbarController() {
  const location = useLocation()
  if (location.pathname !== "/") return null

  const triggerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 🔑 INVERTED LOGIC
        setVisible(!entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0,
      }
    )

    if (triggerRef.current) observer.observe(triggerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Trigger sits at the very start of MainSection */}
      <div ref={triggerRef} className="h-px" />

      {/* Fixed navbar */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50
          transform transition-transform duration-200 ease-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <Navbar variant="home" active />
      </div>
    </>
  )
}

export default HomeNavbarController
