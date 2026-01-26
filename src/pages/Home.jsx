import { useEffect } from "react"
import HeroVideo from "../components/HeroVideo"
import Navbar from "../components/Navbar"
import MainSection from "../components/MainSection"
import Footer from "../components/Footer"

function Home() {
  useEffect(() => {
    document.title = "VirtuCasa | Interior Design & Custom Furniture"
  }, [])
  
  return (
    <>
      <HeroVideo />

      {/* Navbar appears AFTER hero */}
      <Navbar />

      <MainSection />
      <Footer />
    </>
  )
}

export default Home
