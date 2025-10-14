import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact-us"
      className="bg-black text-white py-15 px-4 sm:px-6 flex flex-col items-center"
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
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col space-y-5"
        itemScope
        itemType="https://schema.org/ContactForm"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-black border border-gray-400 focus:outline-none focus:border-[#E53935]"
          autoComplete="name"
          itemProp="name"
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email*"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-black border border-gray-400 focus:outline-none focus:border-[#E53935]"
          autoComplete="email"
          itemProp="email"
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-black border border-gray-400 focus:outline-none focus:border-[#E53935]"
          itemProp="message"
        ></textarea>

        <button
          type="submit"
          className="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-[#E53935] hover:text-white transition-colors duration-300"
          aria-label="Send Message"
        >
          SEND
        </button>

        {status === "sending" && (
          <p className="text-sm text-gray-400 text-center" role="status">
            Sending...
          </p>
        )}
        {status === "success" && (
          <p
            className="text-sm text-green-500 text-center"
            role="status"
            itemProp="successMessage"
          >
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p
            className="text-sm text-red-500 text-center"
            role="alert"
            itemProp="errorMessage"
          >
            Failed to send message. Please try again.
          </p>
        )}
      </form>

      <footer
        className="w-full flex md:flex-col flex-row items-center justify-center mt-8 md:mt-12 md:text-center text-right px-2 md:px-6"
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
