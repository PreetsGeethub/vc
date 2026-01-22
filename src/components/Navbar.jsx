import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import MobileMenu from "./MobileMenu"

function Navbar() {

  const navRef = useRef(null)
  const markerRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const isProject = location.pathname.startsWith("/project")

  const [sticky, setSticky] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Marker observer (MiCasa behavior)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSticky(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    if (markerRef.current) {
      observer.observe(markerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Scroll detect (for project transparent navbar)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    if (isProject) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isProject])

  // Portfolio click
  const handlePortfolioClick = () => {
    setMobileOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document
          .getElementById("nav-section")
          ?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    } else {
      document
        .getElementById("nav-section")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Marker */}
      {!isProject && <div ref={markerRef} className="h-[1px]" />}

      {/* Spacer */}
      {sticky && !isProject && <div className="h-[88px]" />}

      <nav
        ref={navRef}
        className={`
          w-full px-6 md:px-16 py-6
          flex justify-between items-center
          transition-all duration-500 z-[999]

          ${
            isProject
              ? `
                fixed top-0 left-0
                ${!scrolled 
                  ? "bg-transparent text-white" 
                  : "bg-white text-black shadow"}
              `
              : `
                bg-white border-b
                ${sticky ? "fixed top-0 shadow" : "relative"}
              `
          }
        `}
      >

        {/* LOGO */}
        <img
          src="/VR_logo_Full_Inverted.png"
          className="w-28 md:w-36 cursor-pointer"
          onClick={handlePortfolioClick}
        />

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-12 text-sm font-medium">

          <NavLink
            to="/"
            onClick={handlePortfolioClick}
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`
            }
          >
            About Us
          </NavLink>

        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-current"></span>
          <span className="w-6 h-[2px] bg-current"></span>
          <span className="w-6 h-[2px] bg-current"></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <MobileMenu
          onClose={() => setMobileOpen(false)}
          handlePortfolioClick={handlePortfolioClick}
        />
      )}
    </>
  )
}

export default Navbar
