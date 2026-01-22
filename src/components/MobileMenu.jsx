import { useLocation } from "react-router-dom"

function MobileMenu({ onClose, handlePortfolioClick }) {

  const location = useLocation()
  const isPortfolio = location.pathname === "/"
  const isAbout = location.pathname === "/about"

  return (
    <div
      className="
        fixed inset-0 z-[1000] bg-white
        flex flex-col
        px-10 py-10
        animate-fadeInSlow
      "
    >

      {/* TOP BAR */}
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <img
          src="/VR_logo_Full_Inverted.png"
          className="w-28"
        />

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="text-2xl"
        >
          ✕
        </button>

      </div>

      {/* CENTER NAV */}
      <div className="flex-1 flex items-center justify-center">

        <ul className="space-y-10 text-3xl font-medium text-center">

          <li
            onClick={() => {
              handlePortfolioClick()
              onClose()
            }}
            className={`
              animate-slideUpSlow
              ${isPortfolio ? "text-black" : "text-gray-400"}
            `}
          >
            Portfolio
          </li>

          <li
            onClick={onClose}
            className={`
              animate-slideUpSlow delay-150
              ${isAbout ? "text-black" : "text-gray-400"}
            `}
          >
            About Us
          </li>

        </ul>

      </div>

      {/* BOTTOM CONTACT */}
      <div
        className="
          text-sm text-gray-600
          space-y-2 text-center
          animate-slideUpSlow delay-300
        "
      >
        <p>hello@virtucasa.com</p>
        <p>+91 9876543210</p>
        <p>Jaipur, India</p>
      </div>

    </div>
  )
}

export default MobileMenu
