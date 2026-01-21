import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails.jsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<ProjectDetails />} />
    </Routes>
  )
}

export default App
