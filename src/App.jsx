import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import About from "./pages/About"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
