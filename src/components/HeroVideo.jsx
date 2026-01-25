import { useEffect, useState, useRef } from 'react'

function HeroVideo() {
    const [showLogo, setShowLogo] = useState(true)
    const [phase, setPhase] = useState("intro")
    const videoRef = useRef(null)

    useEffect(() => {
        // Complete body/html reset
        document.body.style.margin = '0'
        document.body.style.padding = '0'
        document.body.style.overflow = 'auto'
        document.documentElement.style.margin = '0'
        document.documentElement.style.padding = '0'
        document.documentElement.style.overflow = 'auto'
        
        const root = document.getElementById('root')
        if (root) {
            root.style.margin = '0'
            root.style.padding = '0'
        }

        // Intro animation timing
        let timer
        if (phase === "intro") {
            timer = setTimeout(() => setPhase("play"), 2000)
        }

        return () => clearTimeout(timer)
    }, [phase])

    // Optional: Control logo visibility based on video time
    const handleTimeUpdate = () => {
        if (!videoRef.current || phase !== "play") return
        
        const t = videoRef.current.currentTime
        
        // Customize these timings based on your video
        if (t <= 1.5) {
            setShowLogo(true)
        } else if (t < 44) {
            setShowLogo(true)  // Change to false if you want logo to hide
        } else {
            setShowLogo(true)
        }
    }

    return (
        <>
            {/* Hero Section - Full viewport */}
            <div className="relative w-full h-screen overflow-hidden">
                
                {/* Black screen intro */}
                <div
                    className={`
                        absolute inset-0 bg-black z-20 
                        transition-opacity duration-1000
                        ${phase === "play" ? "opacity-0 pointer-events-none" : "opacity-100"}
                    `}
                />

                {/* Video Background */}
                <video
                    ref={videoRef}
                    className={`
                        absolute inset-0 w-full h-full object-cover
                        transition-opacity duration-1000
                        ${phase === "play" ? "opacity-100" : "opacity-0"}
                    `}
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="auto"
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay on video */}
                <div className="absolute inset-0 bg-black/80 z-10" />

                {/* Logo */}
                <img
                    src="./VR_logo_Full.png"
                    alt="virtucasa"
                    className={`
                        absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 
                        z-40 w-82
                        transition-opacity duration-1000
                        ${showLogo ? "opacity-100" : "opacity-0"}
                        ${phase === "intro" ? "animate-[cinematicFade_2s_ease-out]" : ""}
                    `}
                />
                
                {/* Scroll Down Arrow */}
                <button
                    onClick={() => {
                        document.getElementById('main-section')?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 group cursor-pointer"
                    aria-label="Scroll to content"
                >
                    <img
                        src="./hero_arrow.svg"
                        alt="Scroll down"
                        className="w-4 h-4 group-hover:animate-[fadeDownUp_1.2s_ease-in-out_1]"
                    />
                </button>
            </div>
            
            {/* Main Content Section */}
            <div id="main-section" className="relative z-10 bg-white" />
        </>
    )
}

export default HeroVideo