import HeroVideo from "../components/HeroVideo"
import Navbar from "../components/Navbar"
import MainSection from "../components/MainSection"

function Home() {
  return (
    <>
      <HeroVideo />

      {/* Navbar appears AFTER hero */}
      <Navbar />

      <MainSection />
    </>
  )
}

export default Home
