import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section
      id="contact-us"
      className="relative bg-black text-white py-14 px-4 sm:px-6 flex flex-col items-center overflow-visible"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <h2
        id="contact-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-center"
        itemProp="name"
      >
        Contact Us
      </h2>

      <div
        className="w-16 sm:w-20 h-[2px] bg-gray-500 mb-6 rounded"
        role="presentation"
      ></div>

      <p
        className="text-gray-300 mb-8 text-center text-sm sm:text-base"
        itemProp="description"
      >
        Drop us a line!
      </p>

      <form
        className="w-full max-w-md flex flex-col space-y-5"
        itemScope
        itemType="https://schema.org/ContactForm"
      >
        <input
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          required
          className="w-full p-3 rounded-md bg-black border border-gray-400 focus:outline-none focus:border-[#E53935]"
          autoComplete="name"
          itemProp="name"
        />

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email*"
          required
          value={formData.email}
          className="w-full p-3 rounded-md bg-black border border-gray-400 focus:outline-none focus:border-[#E53935]"
          autoComplete="email"
          itemProp="email"
        />

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Message"
          required
          value={formData.message}
          className="w-full p-3 rounded-md bg-black border border-gray-400 focus:outline-none focus:border-[#E53935]"
          itemProp="message"
        ></textarea>

          <button
            type="button"
            className="flex items-center justify-center gap-2 text-white text-[16px] bg-gradient-to-r from-[#ff5757] to-[#ff0000] 
    hover:from-[#ff6a6a] hover:to-[#e00000] focus:ring-4 focus:outline-none focus:ring-red-300 
    dark:focus:ring-red-800 shadow-[0_0_25px_rgba(255,0,0,0.4)] font-medium rounded-lg 
    px-8 py-3 text-center transition-transform duration-200 hover:scale-[1.02]"
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            SEND
          </button>

      </form>

      <footer
        className="w-full flex md:flex-col flex-row items-center justify-center mt-4 md:mt-12 md:text-center text-right px-2 md:px-6"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <p className="text-sm text-gray-100" itemProp="copyrightNotice">
          © {new Date().getFullYear()} Open AI Team — All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default ContactForm;
