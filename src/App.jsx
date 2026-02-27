import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import About from "./pages/About"
import BlogList from "./components/BlogList"
import BlogDetailPage from "./pages/BlogDetailPage"

function App() {
  
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault()
    document.addEventListener("contextmenu", disableRightClick)

    return () => {
      document.removeEventListener("contextmenu", disableRightClick)
    }
  }, [])

  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<ProjectDetails />} />
      <Route path="/blogs" element={<BlogList/>} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />  {/* NEW */}
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
