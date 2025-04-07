import React from "react";

const Contact = () => {
  return (
    <section className="py-8 px-4 bg-white/5 sm:backdrop-blur-md backdrop-blur-none rounded-lg shadow border border-white/10" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4 text-[#E3ECFF]">Get in Touch</h3>
        <p className="text-[#E3ECFF] mb-6">Fill out the form below to send me a message directly.</p>
        <form
              name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true"
              className="space-y-4 text-left text-[#E3ECFF]"
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
                  className="w-full text-white placeholder-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400 bg-gradient-to-r from-[#1f3a8a] to-[#6366f0] border border-white/20"
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
                   className="w-full text-white placeholder-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400 bg-gradient-to-r from-[#1f3a8a] to-[#6366f0] border border-white/20"
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
                   className="w-full text-white placeholder-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400 bg-gradient-to-r from-[#1f3a8a] to-[#6366f0] border border-white/20"
                ></textarea>
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="my-4">
                <div className="g-recaptcha" data-netlify-recaptcha="true" ></div>
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
