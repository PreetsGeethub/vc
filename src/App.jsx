import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
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
            <Footer />   {/* ALWAYS at bottom */}
          </>
        } 
      />
    </Routes>
    
  )
}

export default App
