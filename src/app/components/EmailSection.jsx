// components/EmailSection.jsx
"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const email = form.user_email?.value;
    const subject = form.subject?.value;
    const message = form.message?.value;

    if (!email || !subject || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    console.log("Sending email with:", { email, subject, message });

    try {
      const result = await emailjs.sendForm(
        "service_uc8w0ec",        // ✅ Your EmailJS service ID
        "template_h281pu6",       // ✅ Your EmailJS template ID
        formRef.current,
        "HohwLYt8RIkUe4ONq"       // ✅ Your EmailJS public key
      );

      console.log("✅ Email sent:", result.text);
      setIsSent(true);
      setErrorMessage("");
      formRef.current.reset();
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      setErrorMessage("Something went wrong while sending the email.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">

  


      <div>
        <h5 className="text-xl font-extrabold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities. My inbox is always open. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col">
        <div className="mb-6">
          <label htmlFor="user_email" className="text-white block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="jacob@gmail.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
            Message
          </label>
          <textarea
            name="message"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-br from-[#4682B4] via-[#4169E1] to-[#00BFFF] hover:from-[#4169E1] hover:via-[#1E90FF] hover:to-[#00BFFF]

 text-white font-medium py-2.5 px-5 rounded-lg transition-colors"
        >
          Send Message
        </button>

        {isSent && (
          <p className="text-green-500 mt-4">✅ Your message has been sent successfully!</p>
        )}
        {errorMessage && (
          <p className="text-red-500 mt-4">❌ {errorMessage}</p>
        )}
      </form>
    </section>
  );
};

export default EmailSection;
