import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import MobileMenu from "./MobileMenu"

function Navbar() {
  const markerRef = useRef(null)
  const navRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const isProject = location.pathname.startsWith("/project")

  const [sticky, setSticky] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(88)

  /* ---------------- MEASURE NAV HEIGHT ---------------- */
  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.getBoundingClientRect().height
      setNavHeight(height)
    }
  }, [])

  /* ---------------- DESKTOP STICKY (AFTER HERO) ---------------- */
  useEffect(() => {
    if (isProject) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSticky(!entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: `-1px 0px 0px 0px`,
        threshold: 0,
      }
    )

    if (markerRef.current) observer.observe(markerRef.current)
    return () => observer.disconnect()
  }, [isProject])

  /* ---------------- PROJECT PAGE TRANSPARENCY ---------------- */
  useEffect(() => {
    if (!isProject) return

    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isProject])

  /* ---------------- PORTFOLIO CLICK ---------------- */
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
      {/* Marker - triggers sticky behavior */}
      {!isProject && <div ref={markerRef} style={{ height: '1px', marginTop: '-1px' }} />}

      {/* Spacer - uses actual measured height */}
      {sticky && !isProject && (
        <div style={{ height: `${navHeight}px` }} />
      )}

      <nav
        ref={navRef}
        className={`
          w-full px-6 md:px-16 py-6
          flex justify-between items-center
          z-[999]
          transform-gpu

          ${
            isProject
              ? `
                fixed top-0 left-0
                transition-all duration-200 ease-out
                ${
                  !scrolled
                    ? "bg-transparent text-white"
                    : "bg-white text-black shadow-lg"
                }
              `
              : `
                bg-white border-b
                ${sticky ? "fixed top-0 left-0 shadow-lg" : "relative"}
              `
          }
        `}
      >
        {/* LOGO */}
        <img
          src="/VR_logo_Full_Inverted.png"
          alt="VirtuCasa"
          className="w-28 md:w-36 cursor-pointer"
          onClick={handlePortfolioClick}
        />

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-12 text-sm font-medium">
          <NavLink
            to="/"
            onClick={handlePortfolioClick}
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-400 hover:text-black transition-colors"
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-400 hover:text-black transition-colors"
            }
          >
            About Us
          </NavLink>
        </ul>

        {/* MOBILE HAMBURGER */}
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