export default function SocialLinks() {
    return (
      <div className="flex gap-4 text-2xl">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
          <i className="ri-github-fill"></i>
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <i className="ri-instagram-line"></i>
        </a>
      </div>
    );
  }
  