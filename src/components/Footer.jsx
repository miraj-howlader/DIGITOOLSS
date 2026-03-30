import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Left: Logo & Text */}
        <div className="flex flex-col md:flex-1">
          <h2 className="text-2xl font-bold mb-2">DISITOOLS</h2>
          <p className="text-gray-400 text-sm">
            Premium digital tools for productivity and creativity. Helping businesses and individuals succeed online.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-col md:flex-row gap-12 md:flex-1 justify-center">
          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Tools</li>
              <li>Pricing</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Guides</li>
            </ul>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col md:flex-1 items-start md:items-end gap-4">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-gray-500 text-sm text-center mt-8">
        &copy; {new Date().getFullYear()} DISITOOLS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;