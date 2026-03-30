import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        
        <div className="flex flex-col md:flex-1">
          <h2 className="text-2xl font-bold mb-2">DigiTools</h2>
          <p className="text-gray-400 text-sm">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row gap-12 md:flex-1 justify-center">
          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="text-gray-400 text-sm space-y-4">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-400 text-sm space-y-4">
              <li>About</li>
              <li>Blog</li>
              <li>Carrers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-gray-400 text-sm space-y-4">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col md:flex-1 items-start md:items-end gap-4">
          <h3 className="font-semibold mb-2">Social Links</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className=" transition bg-white rounded-full p-2">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className=" transition bg-white rounded-full p-2">
              <FaTwitter size={20} />
            </a>
            <a href="#" className=" transition bg-white rounded-full p-2">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

      </div>

     
      <div className="text-gray-500 px-24 flex flex-wrap mx-auto text-sm text-center mt-8 justify-between">
        &copy; {new Date().getFullYear()} DISITOOLS. All rights reserved.
        <hr />
        <div className="flex gap-8 flex-wrap space-y-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;