import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar';
import MainSection from './MainSection';

function HeroVideo() {
    const [showLogo, setShowLogo] = useState(true)
    const [phase, setPhase] = useState("intro");
    const videoRef = useRef(null);

    useEffect(() => {
        // Complete body/html reset
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.overflow = 'auto';
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.documentElement.style.overflow = 'auto';
        
        // Remove any default spacing from root
        const root = document.getElementById('root');
        if (root) {
            root.style.margin = '0';
            root.style.padding = '0';
        }

        let timer;
        if (phase === "intro") {
            timer = setTimeout(() => setPhase("play"), 2000);
        }
        if (phase === "outro") {
            timer = setTimeout(() => {
                setPhase("play");
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [phase]);

    const handleTimeUpdate = () => {
        if (!videoRef.current) return
      
        if (phase !== "play") {
          setShowLogo(true)
          return
        }
      
        const t = videoRef.current.currentTime
      
        if(t<=1.5){
            setShowLogo(true)
        }
        else if (t < 6) {
          setShowLogo(false)
        }
        else if (t < 44) {
          setShowLogo(true)
        }
        else if (t <= 54) {
          setShowLogo(false)
        }
        else {
          setShowLogo(true)
        }
    }

    useEffect(() => {
        if (!videoRef.current) return
      
        if (phase === "play") {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
    }, [phase])

    return (
        <>
            {/* Hero Section - Takes up full viewport, scrolls away */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Black screen */}
                <div
                    className={`absolute inset-0 bg-black z-20 transition-opacity duration-1000
                    ${phase === "play" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                />

                {/* Video */}
                <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                    ${phase === "play" ? "opacity-100" : "opacity-0"}`}
                    src="./S3-.mp4"
                    onEnded={() => setPhase("outro")}
                    muted
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                />

                {/* Dark overlay on video */}
                <div className="absolute inset-0 bg-black/80 z-10"></div>

                {/* Logo */}
                <img
                    src="./VR_logo_Full.png"
                    alt="virtucasa"
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-82
                        transition-opacity duration-1000
                        ${showLogo ? "opacity-100" : "opacity-0"}`}
                />
                
                {/* Scroll Down Arrow */}
                <button
                    onClick={() => {
                        document.getElementById('main-section')?.scrollIntoView({
                            behavior: 'smooth'
                        });
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
            
            {/* Main Content Section - Navbar and content */}
            <div id="main-section" className="relative z-10 bg-white">
                <Navbar/>
                {/* Your content sections will go here */}
                <MainSection/>
            </div>
        </>
    )
}

export default HeroVideo