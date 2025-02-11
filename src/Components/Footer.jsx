import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#37225B] py-10 mt-10 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl  mb-4 text-white">Quick Links</h2>
          <ul className="menu menu-vertical p-0">
            <li><a href="/" className="hover:text-accent">Home</a></li>
            <li><a href="/report-crime" className="hover:text-accent">Report Crime</a></li>
            <li><a href="/leaderboard" className="hover:text-accent">Leaderboard</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl  mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-500">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-500">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl   mb-4">Contact Info</h2>
          <p>Email: <a href="mailto:support@crimeradar.com" className="hover:text-purple-500">support@crimeradar.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-purple-500">+1 (234) 567-890</a></p>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-base-300 pt-4 text-white">
        <p className="text-xs">&copy; 2025 CrimeRadar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
