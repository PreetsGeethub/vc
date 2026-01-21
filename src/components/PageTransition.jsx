import { useEffect, useState } from "react"

function PageTransition({ children }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
    const t = setTimeout(() => setShow(true), 50)
    return () => clearTimeout(t)
  }, [children])

  return (
    <div
      className={`
        transition-opacity duration-8000
        ${show ? "opacity-100" : "opacity-0"}
      `}
    >
      {children}
    </div>
  )
}

export default PageTransition
