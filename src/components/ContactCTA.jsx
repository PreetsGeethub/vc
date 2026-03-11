import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactCTA() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_g55d2g2",
        "template_z7qb23q",
        form.current,
        "SBwM9sjgMnYQeEZzn"  
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("Inquiry sent successfully!");
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.log("FAILED:", error);
          alert("Failed to send inquiry.");
          setSending(false);
        }
      );
  };

  return (
    <section className="bg-[#f5f3f0] py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="uppercase tracking-widest text-sm mb-6 text-gray-500 font-inter">
            INTERIORS | FURNITURE | VR
          </p>

          <h2 className="font-playfair text-5xl md:text-6xl leading-tight text-[rgb(30,26,22)]">
            Let’s design your space
            <br />
            together with us.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          <p className="font-inter text-lg text-gray-600">
            Have a project in mind? Fill the form or contact us directly on WhatsApp.
          </p>

          {/* FORM */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border px-4 py-3 font-inter"
              required
                            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="w-full border px-4 py-3 font-inter"
              required
            />

            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              className="w-full border px-4 py-3 font-inter"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              className="w-full border px-4 py-3 h-32 font-inter"
              required
            ></textarea>

            <button
              type="submit"
              disabled={sending}
              className="
                border px-8 py-3 uppercase tracking-wider
                hover:bg-black hover:text-white transition
                font-inter
                disabled:opacity-50
              "
            >
              {sending ? "Sending..." : "Send Inquiry"}
            </button>
          </form>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/9119379443" // 🔴 replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block border px-8 py-3 uppercase tracking-wider
              hover:bg-black hover:text-white transition font-inter
            "
          >
            Chat on WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
}

export default ContactCTA;