import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-white text-[#2f2f2f]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          className="space-y-4 text-left"
        >
          {/* Netlify hidden input for form name */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block text-sm mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            ></textarea>
          </div>

          {/* reCAPTCHA placeholder */}
          <div className="my-4">
            <div className="g-recaptcha" data-netlify-recaptcha="true"  data-sitekey="6LfUAQgrAAAAAN52C4CpyY-Z9O1SFJ7I36u55gHm"></div>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
