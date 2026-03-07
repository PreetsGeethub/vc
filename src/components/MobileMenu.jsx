import { useLocation, useNavigate } from "react-router-dom"

function MobileMenu({ onClose, handlePortfolioClick }) {
  const location = useLocation()
  const navigate = useNavigate()

  const isPortfolio = location.pathname === "/"
  const isAbout = location.pathname === "/about"
  const isBlog = location.pathname === "/blogs"
  const isContact = location.pathname === "/contact"

  const handleAboutClick = () => {
    navigate("/about")
    onClose()
  }
  const handleBlogClick = () => {
    navigate("/blogs")
    onClose()
  }
  const handleContactClick = () => {
    navigate("/contact")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-white flex flex-col px-10 py-10 animate-fadeInSlow">

      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        <img
          src="/VR_logo_Full_Inverted.png"
          className="w-28 cursor-pointer"
          onClick={() => { handlePortfolioClick(); onClose() }}
        />
        <button onClick={onClose} className="text-2xl">✕</button>
      </div>

      {/* CENTER NAV */}
      <div className="flex-1 flex items-center justify-center">
        <ul className="space-y-10 text-3xl font-medium text-center">

          <li
            onClick={() => { handlePortfolioClick(); onClose() }}
            className={`animate-slideUpSlow cursor-pointer ${isPortfolio ? "text-black" : "text-gray-400"}`}
          >
            Portfolio
          </li>

          <li
            onClick={handleBlogClick}
            className={`animate-slideUpSlow delay-150 cursor-pointer ${isBlog ? "text-black" : "text-gray-400"}`}
          >
            Blogs
          </li>

          <li
            onClick={handleContactClick}
            className={`animate-slideUpSlow delay-150 cursor-pointer ${isContact ? "text-black" : "text-gray-400"}`}
          >
            Contact Us
          </li>

          <li
            onClick={handleAboutClick}
            className={`animate-slideUpSlow delay-150 cursor-pointer ${isAbout ? "text-black" : "text-gray-400"}`}
          >
            About Us
          </li>

        </ul>
      </div>

      {/* BOTTOM CONTACT */}
      <div className="text-sm text-gray-600 space-y-2 text-center animate-slideUpSlow delay-300">
        <p>virtucasajpr@gmail.com</p>
        <p>+91 911193 79443</p>
        <p>Jaipur, India</p>
      </div>

    </div>
  )
}

export default MobileMenu