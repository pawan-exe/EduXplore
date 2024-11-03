// Footer.js
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:justify-between items-start  space-y-8 md:space-y-0">
        {/* About Us Section */}
        <div className="md:w-1/4">
          <h1 className="text-xl md:text-2xl font-semibold text-white">
            EduXplore
          </h1>
          <p className="text-sm mt-2">
            Unlock a world of knowledge with expertly designed courses for all
            levels. Empower yourself with learning anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-[150px]">
          <h4 className="text-base md:text-lg text-white font-semibold">
            Quick Links
          </h4>
          <ul className="text-sm space-y-2 mt-2">
            <li>
              <a className="hover:text-white transition cursor-pointer">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white transition">
                Courses
              </a>
            </li>
            <li>
              <a className="hover:text-white transition cursor-pointer">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-white transition cursor-pointer">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:w-1/4">
          <h4 className="text-base md:text-lg font-semibold text-white">
            Stay Updated
          </h4>
          <p className="text-sm mt-2 mb-4">
            Sign up for our newsletter to receive the latest updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-sm md:text-base px-3  w-[145px] sm:w-[180px] md:w-[140px] py-1 rounded-l-md bg-gray-700 text-gray-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="text-sm md:text-base px-3 py-2 rounded-r-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="md:w-[140px]">
          <h4 className="text-base md:text-lg text-white font-semibold mb-4">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a className="text-gray-400 hover:text-white transition cursor-pointer ">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="text-gray-400 hover:text-white transition cursor-pointer">
              <Twitter className="w-5 h-5" />
            </a>
            <a className="text-gray-400 hover:text-white transition cursor-pointer">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="text-gray-400 hover:text-white transition cursor-pointer">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} EduXplore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
