import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46euhkc",
        "U0xm-PezaukQza_AW",
        form.current,
        "U0xm-PezaukQza_AW"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="py-20 px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">

        <h2 className="font-playfair text-4xl mb-10 text-center">
          Start Your Project
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border px-5 py-4 font-inter"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full border px-5 py-4 font-inter"
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full border px-5 py-4 font-inter"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="5"
            required
            className="w-full border px-5 py-4 font-inter"
          ></textarea>

          <button
            type="submit"
            className="border border-black px-10 py-4 font-inter tracking-wide uppercase hover:bg-black hover:text-white transition"
          >
            Send Inquiry
          </button>

        </form>
      </div>
    </section>
  );
}

export default ContactForm;