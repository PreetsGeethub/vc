import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(44px)",
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
      }}
    >{children}</div>
  );
}

export default function ContactPage() {
  const contactDetails = [
    { icon: "📍", label: "Studio Address", value: "Jaipur, Rajasthan" },
    { icon: "📞", label: "Phone", value: "+91 91193 79443" },
    { icon: "📧", label: "Email", value: "virtucasajpr@gmail.com" },
    { icon: "🕒", label: "Hours", value: "Mon – Sat · 10 AM — 7 PM" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');
        .cp-root *, .cp-root *::before, .cp-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .cp-root { font-family: 'Inter', sans-serif; color: #2A2118; background: #FAFAF8; }

        /* HERO */
        .cp-hero {
          position: relative; min-height: 92vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: #1A120B;
        }
        .cp-hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 90% 55% at 50% 110%, rgba(196,151,90,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(196,151,90,0.07) 0%, transparent 60%);
        }
        .cp-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(196,151,90,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,151,90,0.07) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%);
        }
        .cp-hero-content {
          position: relative; z-index: 2;
          text-align: center; padding: 8rem 2rem 10rem;
          max-width: 1000px; width: 100%;
        }
        .cp-eyebrow {
          display: inline-flex; align-items: center; gap: 14px;
          font-size: 0.8rem; font-weight: 500; letter-spacing: 0.3em;
          text-transform: uppercase; color: #C4975A; margin-bottom: 2.5rem;
        }
        .cp-eyebrow::before, .cp-eyebrow::after {
          content: ''; display: block; width: 48px; height: 1px;
          background: linear-gradient(to right, transparent, #C4975A);
        }
        .cp-eyebrow::after { background: linear-gradient(to left, transparent, #C4975A); }
        .cp-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 9rem);
          font-weight: 400; line-height: 1.04;
          color: #FAF8F4; letter-spacing: -0.02em; margin-bottom: 2.5rem;
        }
        .cp-hero-title em { font-style: italic; color: #C4975A; }
        .cp-hero-sub {
          font-size: clamp(1.05rem, 2vw, 1.3rem); font-weight: 300;
          color: rgba(250,248,244,0.55); letter-spacing: 0.03em;
          max-width: 580px; margin: 0 auto; line-height: 1.9;
        }
        .cp-scroll-hint {
          position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          color: rgba(250,248,244,0.3); font-size: 0.65rem; letter-spacing: 0.25em; text-transform: uppercase;
        }
        .cp-scroll-bar {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, #C4975A, transparent);
          animation: scrollAnim 2.2s ease-in-out infinite;
        }
        @keyframes scrollAnim {
          0%   { transform: scaleY(0); transform-origin: top; }
          45%  { transform: scaleY(1); transform-origin: top; }
          55%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        /* FORM SECTION */
        .cp-form-section {
          background: #FAFAF8;
          padding: 9rem 2rem;
          position: relative;
          overflow: hidden;
        }
        .cp-form-section::before {
          content: 'INQUIRE';
          position: absolute; bottom: 2rem; right: 3rem;
          font-family: 'Playfair Display', serif; font-size: 9rem; font-weight: 700;
          color: rgba(42,33,24,0.04); line-height: 1; pointer-events: none; letter-spacing: 0.05em;
        }
        .cp-form-header {
          text-align: center; margin-bottom: 4.5rem;
        }
        .cp-form-tag {
          display: inline-block;
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.3em;
          text-transform: uppercase; color: #C4975A; margin-bottom: 1.4rem;
        }
        .cp-form-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 400; color: #1A120B; line-height: 1.1; margin-bottom: 0.8rem;
        }
        .cp-form-divider {
          width: 56px; height: 2px;
          background: linear-gradient(to right, #C4975A, #E8C98A);
          margin: 1.4rem auto 0;
        }
        .cp-form-services {
          display: flex; align-items: center; justify-content: center; gap: 0;
          margin-top: 2.2rem;
        }
        .cp-form-services span {
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.3em;
          text-transform: uppercase; color: rgba(42,33,24,0.35);
          font-family: 'Inter', sans-serif;
        }
        .cp-form-services .cp-svc-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: #C4975A; margin: 0 1.1rem; flex-shrink: 0; opacity: 0.6;
        }
        .cp-form-card {
          max-width: 800px; margin: 3rem auto 0;
          position: relative; z-index: 1;
          background: white;
          border: 1px solid rgba(196,151,90,0.15);
          padding: 4.5rem 5rem;
          box-shadow: 0 24px 80px rgba(42,33,24,0.07);
        }
        .cp-form-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(to right, #C4975A, #E8C98A, #C4975A);
        }

        /* LOCATION SECTION — centered heading, then address + map */
        .cp-location-section {
          background: #1A120B;
          padding: 7rem 2rem 9rem;
          position: relative; overflow: hidden;
        }
        .cp-location-section::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 80% 50% at 50% 100%, rgba(196,151,90,0.09) 0%, transparent 65%);
        }

        /* Centered heading */
        .cp-loc-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative; z-index: 1;
        }
        .cp-loc-tag {
          display: inline-block;
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.32em;
          text-transform: uppercase; color: #C4975A; margin-bottom: 1.2rem;
        }
        .cp-loc-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          font-weight: 400; color: #FAF8F4; line-height: 1.1;
        }
        .cp-loc-heading em { font-style: italic; color: #C4975A; }
        .cp-loc-div {
          width: 48px; height: 1px; background: #C4975A;
          margin: 1.3rem auto 0;
        }

        /* Body: address | map — contained max-width centered */
        .cp-loc-body {
          display: grid;
          grid-template-columns: 1fr 1.7fr;
          gap: 5rem;
          max-width: 900px;
          margin: 0 auto;
          align-items: center;
          position: relative; z-index: 1;
        }

        /* Address */
        .cp-addr-list {
          list-style: none; display: flex; flex-direction: column; gap: 2rem;
        }
        .cp-addr-item { display: flex; align-items: flex-start; gap: 1rem; }
        .cp-addr-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          border: 1px solid rgba(196,151,90,0.3);
          display: flex; align-items: center; justify-content: center; font-size: 1rem;
        }
        .cp-addr-label {
          font-size: 0.6rem; font-weight: 500; letter-spacing: 0.25em;
          text-transform: uppercase; color: #C4975A; margin-bottom: 0.25rem;
        }
        .cp-addr-val {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; color: rgba(250,248,244,0.8); line-height: 1.4;
        }

        /* Map */
        .cp-map-frame {
          position: relative; width: 100%;
        }
        .cp-map-frame iframe {
          width: 100%; height: 280px;
          border: none; display: block;
          filter: grayscale(0.25) sepia(0.1);
        }
        .cp-map-corner {
          position: absolute; width: 16px; height: 16px;
          border-color: #C4975A; border-style: solid; z-index: 2;
        }
        .cp-map-corner.tl { top: -5px; left: -5px; border-width: 2px 0 0 2px; }
        .cp-map-corner.tr { top: -5px; right: -5px; border-width: 2px 2px 0 0; }
        .cp-map-corner.bl { bottom: -5px; left: -5px; border-width: 0 0 2px 2px; }
        .cp-map-corner.br { bottom: -5px; right: -5px; border-width: 0 2px 2px 0; }
        .cp-dir-btn-wrap {
          position: absolute; bottom: -1.2rem; left: 50%; transform: translateX(-50%);
          z-index: 2;
        }
        .cp-dir-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 0.75rem 1.8rem;
          background: rgba(26,18,11,0.92); backdrop-filter: blur(8px);
          border: 1px solid rgba(196,151,90,0.5);
          color: #C4975A; font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;
          transition: all 0.3s ease; white-space: nowrap;
        }
        .cp-dir-btn:hover { background: #C4975A; color: #1A120B; }

        /* WHATSAPP */
        .cp-whatsapp-wrap {
          position: fixed; bottom: 2rem; left: 2.5rem; z-index: 999;
        }
        .cp-whatsapp-btn {
          display: inline-flex; align-items: center; gap: 11px;
          padding: 0.95rem 1.8rem; background: #25D366; color: white;
          font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 500;
          letter-spacing: 0.02em; text-decoration: none; border-radius: 100px;
          box-shadow: 0 8px 28px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.15);
          transition: all 0.3s ease; white-space: nowrap;
        }
        .cp-whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(37,211,102,0.5);
        }
        .cp-whatsapp-btn svg { width: 20px; height: 20px; fill: white; flex-shrink: 0; }
        .cp-wa-pulse {
          position: absolute; inset: -5px; border-radius: 100px;
          border: 2px solid rgba(37,211,102,0.35);
          animation: waPulse 2.5s ease-in-out infinite; pointer-events: none;
        }
        @keyframes waPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(1.05); opacity: 0; }
        }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .cp-loc-body { grid-template-columns: 1fr; gap: 3.5rem; }
          .cp-location-section { padding: 5rem 2rem 7rem; }
          .cp-map-frame iframe { height: 220px; }
          .cp-form-card { padding: 3rem 2.5rem; }
        }
        @media (max-width: 680px) {
          .cp-hero-title { font-size: 3.2rem; }
          .cp-whatsapp-btn span { display: none; }
          .cp-whatsapp-btn { padding: 0.9rem; border-radius: 50%; }
        }
      `}</style>
    <Navbar />
      <div className="cp-root">
        

        {/* HERO */}
        <section className="cp-hero">
          <div className="cp-hero-bg" />
          <div className="cp-hero-grid" />
          <div className="cp-hero-content">
            <FadeIn><div className="cp-eyebrow">VirtuCasa Studio</div></FadeIn>
            <FadeIn delay={160}>
              <h1 className="cp-hero-title">
                Let's design your<br /><em>space together.</em>
              </h1>
            </FadeIn>
            <FadeIn delay={320}>
              <p className="cp-hero-sub">
                Share your vision with us — from custom furniture to complete interior execution and immersive VR walkthroughs.
              </p>
            </FadeIn>
          </div>
          <div className="cp-scroll-hint">
            <div className="cp-scroll-bar" />
            <span>Scroll</span>
          </div>
        </section>

        {/* FORM */}
        <section className="cp-form-section">
          <FadeIn>
            <div className="cp-form-header text-4xl">
              <div className="cp-form-tag">Start Your Project</div>
              <h2 className="cp-form-title">Tell us about your space</h2>
              <div className="cp-form-divider" />
            </div>
          </FadeIn>
          <FadeIn delay={180}>
            <div className="cp-form-services text-4xl">
              <span>Interiors</span>
              <div className="cp-svc-dot" />
              <span>Furniture</span>
              <div className="cp-svc-dot" />
              <span>VR Walkthroughs</span>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="cp-form-card">
              <ContactForm
                variant="luxury"
                whatsappNumber="91XXXXXXXXXX"
                showWhatsapp={true}
                accentColor="#C4975A"
                darkColor="#1A120B"
                submitLabel="Send Inquiry"
              />
            </div>
          </FadeIn>
        </section>

        {/* LOCATION — centered heading, then address + map */}
        <section className="cp-location-section">

          {/* Centered heading */}
          <FadeIn>
            <div className="cp-loc-header">
              <div className="cp-loc-tag">Find Us</div>
              <h2 className="cp-loc-heading">Visit our <em>studio.</em></h2>
              <div className="cp-loc-div" />
            </div>
          </FadeIn>

          {/* Address left | Map right — contained, centered */}
          <FadeIn delay={150}>
            <div className="cp-loc-body">

              {/* Address list */}
              <ul className="cp-addr-list">
                {contactDetails.map((item, i) => (
                  <li className="cp-addr-item" key={i}>
                    <div className="cp-addr-icon">{item.icon}</div>
                    <div>
                      <div className="cp-addr-label">{item.label}</div>
                      <div className="cp-addr-val">{item.value}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map */}
              <div className="cp-map-frame">
                <div className="cp-map-corner tl" />
                <div className="cp-map-corner tr" />
                <div className="cp-map-corner bl" />
                <div className="cp-map-corner br" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.607635961296!2d75.76531737401758!3d26.884204361317774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5000755cb5f%3A0xe76c0a44786e8ade!2sVirtuCasa%20Design%20Studio!5e0!3m2!1sen!2sin!4v1772893000651!5m2!1sen!2sin"
                  loading="lazy"
                  allowFullScreen={true}
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VirtuCasa Studio"
                  style={{border: 0}}
                />
                <div className="cp-dir-btn-wrap">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="cp-dir-btn">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>

            </div>
          </FadeIn>

        </section>

       

        {/* WHATSAPP */}
        <div className="cp-whatsapp-wrap">
          <div className="cp-wa-pulse" />
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="cp-whatsapp-btn" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}