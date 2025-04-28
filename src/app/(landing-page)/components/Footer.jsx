import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-500">
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="flex flex-col items-center justify-center py-8 gap-4">
          <div className="text-gray-500 text-center">
            <p>&copy; 2025 Kevin Alvarel. All rights reserved.</p>
          </div>
          {/* Contact Section */}
          <div className="flex gap-5 text-gray-500 ">
            <a
              href="https://instagram.com/kevinalvarel__"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition hover:text-primary-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/kevinalvarel"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition hover:text-primary-500"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
