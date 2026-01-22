function Footer() {
    return (
      <footer
        className="
          bg-black text-white
          px-6 py-16
  
          md:px-20
        "
      >
  
        <div
          className="
            max-w-7xl mx-auto
            grid gap-12
  
            md:grid-cols-3
          "
        >
  
          {/* BRAND */}
          <div className="space-y-4">
  
            <img
              src="/VR_logo_Full.png"
              className="w-40"
              alt="Virtucasa"
            />
  
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting timeless spaces with
              modern architectural excellence.
            </p>
  
          </div>
  
          {/* CONTACT */}
          <div className="space-y-3">
  
            <h4 className="font-playfair text-lg">
              Contact
            </h4>
  
            <p className="text-gray-400 text-sm">
              hello@virtucasa.com
            </p>
  
            <p className="text-gray-400 text-sm">
              +91 98765 43210
            </p>
  
            <p className="text-gray-400 text-sm">
              Jaipur, Rajasthan
            </p>
  
          </div>
  
          {/* SOCIAL */}
          <div className="space-y-4">
  
            <h4 className="font-playfair text-lg">
              Follow us
            </h4>
  
            <div className="flex gap-5">
  
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <img
                  src="/icons/instra.svg"
                  className="w-5"
                />
              </a>
  
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <img
                  src="/icons/fb.svg"
                  className="w-5"
                />
              </a>
  
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <img
                  src="/icons/li.png"
                  className="w-5"
                />
              </a>
  
              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <img
                  src="/icons/twitter.svg"
                  className="w-5"
                />
              </a>
  
            </div>
  
          </div>
  
        </div>
  
        {/* COPYRIGHT */}
        <div
          className="
            border-t border-white/10
            mt-12 pt-6
            text-center text-xs text-gray-500
          "
        >
          © {new Date().getFullYear()} Virtucasa. All rights reserved.
        </div>
  
      </footer>
    )
  }
  
  export default Footer
  