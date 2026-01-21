import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar({ overlay = false }) {

  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`
        w-full px-16 py-6 flex justify-between items-center
        transition-all duration-500 z-[999]

        ${
          overlay
            ? `fixed top-0 left-0 
               ${!scrolled 
                 ? "bg-transparent text-white" 
                 : "bg-white text-black shadow-sm"}`
            : "relative bg-white text-black border-b"
        }
      `}
    >

      {/* LOGO */}
      <img
        src="/VR_logo_Full_Inverted.png"
        className="w-36 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <ul className="flex gap-12 text-sm font-medium">

        <NavLink
          to="/"
          className="text-gray-400 hover:text-black"
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/about"
          className="text-gray-400 hover:text-black"
        >
          About Us
        </NavLink>

      </ul>
    </nav>
  )
}

export default Navbar
