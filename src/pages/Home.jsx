import HeroVideo from "../components/HeroVideo"
import Navbar from "../components/Navbar"
import MainSection from "../components/MainSection"
import Footer from "../components/Footer"

function Home() {
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
