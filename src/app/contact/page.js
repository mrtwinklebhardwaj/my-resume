export const metadata = {
    title: "Contact | Twinkle Bhardwaj",
    description: "Get in touch with Twinkle Bhardwaj for collaborations, projects, or inquiries.",
  };
  
  export default function Contact() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          Have a question or want to work together? Fill out the form below or email me at:
          <a href="mailto:your.email@example.com" className="text-blue-500 underline">
            your.email@example.com
          </a>
        </p>
        
        <form className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" name="name" required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea id="message" name="message" rows="4" required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
  
          <button type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </main>
    );
  }
  