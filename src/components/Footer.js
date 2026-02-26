import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">BHARDWAJ ELECTRICALS</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium event equipment rentals in Mohali. 
              We provide top-quality audio/visual equipment for conferences, 
              exhibitions, weddings, and corporate events.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">
                <FaFacebook className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">
                <FaInstagram className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">
                <FaTwitter className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">
                <FaLinkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/equipment" className="text-gray-300 hover:text-white transition-colors">Equipment</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gray-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Shop No. - 3 Jarnail Enclave<br />
                  Zirakpur Bhabat Road<br />
                  Mohali - 140603
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gray-300 mr-3" />
                <a href="tel:+917888915584" className="text-gray-300 hover:text-white transition-colors">+91 7888915584</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gray-300 mr-3" />
                <a href="tel:+917986584344" className="text-gray-300 hover:text-white transition-colors">+91 7986584344</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-300 mr-3" />
                <a href="mailto:bhardwajelectrical2023@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  bhardwajelectrical2023@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Our Equipment Categories</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Projectors", "Screens", "LED TVs", "Sound Systems", 
              "Microphones", "Lighting", "Laptops", "Stage Equipment",
              "Mixers", "DJ Equipment", "Video Cameras", "Generators"
            ].map((item, index) => (
              <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bhardwaj Electricals. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/rental-agreement" className="text-gray-400 hover:text-white text-sm transition-colors">Rental Agreement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;