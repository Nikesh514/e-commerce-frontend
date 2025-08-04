import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Help</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <button
              className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-white p-3 rounded-full transition"
              aria-label="Instagram"
            >
              <AiOutlineInstagram className="text-2xl" />
            </button>
            <button
              className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-white p-3 rounded-full transition"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-2xl" />
            </button>
          </div>
        </div>


        {/* Newsletter */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
          <form className="flex ">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-white px-6 py-2 rounded-r-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p>&copy; 2025 YourShop. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <img src="https://www.svgrepo.com/show/303251/visa-logo.svg" alt="Visa" className="h-6" />
          <img src="https://www.svgrepo.com/show/303254/paypal-logo.svg" alt="PayPal" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
