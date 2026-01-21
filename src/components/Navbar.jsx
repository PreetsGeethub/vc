
import React, { useEffect, useState, useRef } from 'react'

function Navbar() {
  const [active, setActive] = useState("portfolio")

  const handleScroll = (id, name) => {
    setActive(name)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="w-full px-16 py-6 flex justify-between items-center 
                    border-b bg-white sticky top-0 z-40">
      <img 
        src="./VR_logo_Full_Inverted.png" 
        alt="virtucasa" 
        className="w-78"
      />

      <ul className="flex gap-12 text-sm font-medium">
        <li
          onClick={() => handleScroll("main-section", "portfolio")}
          className={`cursor-pointer transition-colors duration-300
          ${active === "portfolio" ? "text-black" : "text-gray-400 hover:text-black"}`}
        >
          Portfolio
        </li>

        <li
          onClick={() => handleScroll("about", "about")}
          className={`cursor-pointer transition-colors duration-300
          ${active === "about" ? "text-black" : "text-gray-400 hover:text-black"}`}
        >
          About Us
        </li>
      </ul>
    </nav>
  )
}
export default Navbar