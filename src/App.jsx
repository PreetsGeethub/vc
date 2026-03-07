import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import About from "./pages/About"
import BlogList from "./components/BlogList"
import BlogDetailPage from "./pages/BlogDetailPage"
import ContactPage from "./pages/ContactPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault()
    document.addEventListener("contextmenu", disableRightClick)
    return () => {
      document.removeEventListener("contextmenu", disableRightClick)
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/blogs" element={<BlogList/>} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App