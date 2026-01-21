import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Project page layout */}
      <Route 
        path="/project/:slug" 
        element={
          <>
            <Navbar overlay />   {/* 👈 overlay mode */}
            <ProjectDetails />
          </>
        } 
      />
    </Routes>
  )
}

export default App
