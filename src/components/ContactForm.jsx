import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * ContactForm — reusable, style-configurable
 *
 * Props:
 *   variant        "luxury" (default) | "simple"
 *                  "luxury"  → underline fields, floating labels, dark submit + gold sweep, WA pill
 *                  "simple"  → original bordered fields (works anywhere with Tailwind)
 *
 *   whatsappNumber string  e.g. "919876543210"  (no + or spaces)
 *   showWhatsapp   bool    default true — show WA pill next to submit
 *
 *   // Luxury-variant colour overrides (CSS strings)
 *   accentColor    default "#C4975A"
 *   darkColor      default "#1A120B"
 *   submitLabel    string  default "Send Inquiry"
 */
export default function ContactForm({
  variant = "luxury",
  whatsappNumber = "91193 79443",
  showWhatsapp = true,
  accentColor = "#C4975A",
  darkColor = "#1A120B",
  submitLabel = "Send Inquiry",
}) {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [focused, setFocused] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_g55d2g2",
        "template_z7qb23q",
        form.current,
        "SBwM9sjgMnYQeEZzn"
      )
      .then(() => {
        setStatus("sent");
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  /* ── SIMPLE variant (original Tailwind style) ── */
  if (variant === "simple") {
    return (
      <section className="py-20 px-6 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl mb-10 text-center">
            Start Your Project
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input type="text" name="user_name" placeholder="Your Name" required
              className="w-full border px-5 py-4 font-inter" />
            <input type="email" name="user_email" placeholder="Email Address" required
              className="w-full border px-5 py-4 font-inter" />
            <input type="tel" name="user_phone" placeholder="Phone Number"
              className="w-full border px-5 py-4 font-inter" />
            <textarea name="message" placeholder="Tell us about your project" rows="5" required
              className="w-full border px-5 py-4 font-inter" />
            <button type="submit"
              className="border border-black px-10 py-4 font-inter tracking-wide uppercase hover:bg-black hover:text-white transition">
              {status === "sending" ? "Sending..." : submitLabel}
            </button>
          </form>
          {status === "sent" && <p className="mt-4 text-green-700">Message sent successfully!</p>}
          {status === "error" && <p className="mt-4 text-red-600">Failed to send. Please try again.</p>}
        </div>
      </section>
    );
  }

  /* ── LUXURY variant ── */
  const css = `
    .cf-fields { display: flex; flex-direction: column; }
    .cf-row { display: grid; grid-template-columns: 1fr 1fr; }

    .cf-field-wrap {
      border-bottom: 1px solid rgba(42,33,24,0.1);
      transition: border-color 0.3s ease; position: relative;
    }
    .cf-field-wrap.cf-active { border-color: ${accentColor}; }
    .cf-field-wrap.cf-no-border { border-bottom: none; }
    .cf-half:first-child { border-right: 1px solid rgba(42,33,24,0.1); }
    .cf-half-r .cf-field-inner { padding-left: 1.5rem; }
    .cf-half-r .cf-label { left: 1.5rem; }

    .cf-field-inner { padding: 1.8rem 0 0.8rem; position: relative; }
    .cf-label {
      position: absolute; top: 1.8rem; left: 0;
      font-size: 0.72rem; font-weight: 500; letter-spacing: 0.2em;
      text-transform: uppercase; color: rgba(42,33,24,0.38);
      pointer-events: none; transition: all 0.25s ease;
    }
    .cf-lifted .cf-label { top: 0.45rem; font-size: 0.6rem; color: ${accentColor}; }

    .cf-input, .cf-textarea {
      width: 100%; background: transparent; border: none; outline: none;
      font-family: 'Inter', sans-serif; font-size: 1.25rem;
      font-weight: 400; color: #1A120B; padding: 0.5rem 0 0.3rem; resize: none;
    }
    .cf-input::placeholder, .cf-textarea::placeholder { color: transparent; }
    .cf-textarea { min-height: 110px; padding-top: 0.6rem; }

    /* Actions row */
    .cf-actions {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 3rem; gap: 1.5rem; flex-wrap: wrap;
    }
    .cf-note { font-size: 0.8rem; font-weight: 300; color: rgba(42,33,24,0.38); }
    .cf-btns { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }

    /* Submit button — dark bg, gold sweep on hover */
    .cf-submit {
      display: inline-flex; align-items: center; gap: 12px;
      padding: 1.2rem 2.8rem;
      background: ${darkColor}; color: #FAF8F4;
      font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 500;
      letter-spacing: 0.22em; text-transform: uppercase;
      border: none; cursor: pointer;
      transition: all 0.3s ease; position: relative; overflow: hidden;
    }
    .cf-submit::before {
      content: ''; position: absolute; inset: 0;
      background: ${accentColor}; transform: translateX(-100%);
      transition: transform 0.35s ease;
    }
    .cf-submit:hover::before { transform: translateX(0); }
    .cf-submit span, .cf-submit svg { position: relative; z-index: 1; }
    .cf-submit:disabled { opacity: 0.6; cursor: not-allowed; }

    /* WhatsApp pill */
    .cf-wa-wrap { position: relative; display: inline-flex; }
    .cf-wa-pulse {
      position: absolute; inset: -5px; border-radius: 100px;
      border: 2px solid rgba(37,211,102,0.35);
      animation: cfWaPulse 2.5s ease-in-out infinite; pointer-events: none;
    }
    @keyframes cfWaPulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50%       { transform: scale(1.06); opacity: 0; }
    }
    .cf-wa-btn {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 1.2rem 1.8rem;
      background: #25D366; color: white;
      font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 500;
      letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
      border-radius: 100px;
      box-shadow: 0 6px 24px rgba(37,211,102,0.38);
      transition: all 0.3s ease; white-space: nowrap;
    }
    .cf-wa-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(37,211,102,0.52); }
    .cf-wa-btn svg { width: 18px; height: 18px; fill: white; flex-shrink: 0; }

    /* Feedback */
    .cf-feedback {
      margin-top: 1.8rem; padding: 1.1rem 1.5rem;
      font-size: 0.92rem; letter-spacing: 0.02em;
    }
    .cf-success { border-left: 2px solid ${accentColor}; background: rgba(196,151,90,0.06); color: #9a6e30; }
    .cf-error   { border-left: 2px solid #c0392b; background: rgba(192,57,43,0.05); color: #c0392b; }

    @media (max-width: 680px) {
      .cf-row { grid-template-columns: 1fr; }
      .cf-half:first-child { border-right: none; }
      .cf-half-r .cf-field-inner { padding-left: 0; }
      .cf-half-r .cf-label { left: 0; }
      .cf-actions { flex-direction: column; align-items: flex-start; }
      .cf-btns { width: 100%; flex-direction: column; }
      .cf-submit, .cf-wa-btn { width: 100%; justify-content: center; border-radius: 0; }
    }
  `;

  return (
    <>
      <style>{css}</style>

      <form ref={form} onSubmit={sendEmail}>
        <div className="cf-fields">

          {/* Name + Email */}
          <div className="cf-row">
            <div className={"cf-field-wrap cf-half" + (focused === "name" ? " cf-active" : "")}>
              <div className={"cf-field-inner" + (focused === "name" ? " cf-lifted" : "")}>
                <label className="cf-label">Your Name *</label>
                <input className="cf-input" type="text" name="user_name" required placeholder="name"
                  onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
              </div>
            </div>
            <div className={"cf-field-wrap cf-half cf-half-r" + (focused === "email" ? " cf-active" : "")}>
              <div className={"cf-field-inner" + (focused === "email" ? " cf-lifted" : "")}>
                <label className="cf-label">Email Address *</label>
                <input className="cf-input" type="email" name="user_email" required placeholder="email"
                  onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className={"cf-field-wrap" + (focused === "phone" ? " cf-active" : "")}>
            <div className={"cf-field-inner" + (focused === "phone" ? " cf-lifted" : "")}>
              <label className="cf-label">Phone Number</label>
              <input className="cf-input" type="tel" name="user_phone" placeholder="phone"
                onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} />
            </div>
          </div>

          {/* Message */}
          <div className={"cf-field-wrap cf-no-border" + (focused === "msg" ? " cf-active" : "")}>
            <div className={"cf-field-inner" + (focused === "msg" ? " cf-lifted" : "")}>
              <label className="cf-label">Tell Us About Your Project *</label>
              <textarea className="cf-textarea" name="message" rows={4} required placeholder="message"
                onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)} />
            </div>
          </div>

        </div>

        {/* Actions: note | [Send Inquiry]  [WhatsApp] */}
        <div className="cf-actions">
          <p className="cf-note">We'll get back within 24 hours.</p>
          <div className="cf-btns">

            <button type="submit" className="cf-submit" disabled={status === "sending"}>
              <span>{status === "sending" ? "Sending..." : submitLabel}</span>
              {status !== "sending" && (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              )}
            </button>

            {showWhatsapp && (
              <div className="cf-wa-wrap">
                <div className="cf-wa-pulse" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cf-wa-btn"
                  aria-label="Chat on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            )}

          </div>
        </div>

        {status === "sent" && (
          <div className="cf-feedback cf-success">
            ✦ Message sent — we'll be in touch within 24 hours.
          </div>
        )}
        {status === "error" && (
          <div className="cf-feedback cf-error">
            Something went wrong. Please try again or email us directly.
          </div>
        )}
      </form>
    </>
  );
}