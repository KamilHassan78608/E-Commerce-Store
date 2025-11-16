import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from "framer-motion";

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'Collection', href: '/collection' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'About Us', href: '/about' },
];

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <footer className="bg-white text-gray-600 font-sans">
        {/* Full width container */}
        <div className="w-full py-12">

          {/* Main Flex Section */}
          <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-full px-0">

            {/* LEFT: Logo */}
            <div className="flex-1">
              <Link to='/'><img src={logo} alt="Dukan Logo" className="w-32" /></Link>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-xs">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* CENTER: Company Links */}
            <div className="flex-1 flex flex-col items-center mt-8 md:mt-0">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-center">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Get in Touch */}
            <div className="flex-1 flex flex-col items-start mt-8 md:mt-0">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Get in touch
              </h4>
              <div className="mt-4 space-y-3 text-left">
                <a href="tel:+12124567890" className="text-sm text-gray-600 hover:text-gray-900">
                  +1 212-456-7890
                </a>
                <a href="mailto:contact@foreveryou.com" className="text-sm text-gray-600 hover:text-gray-900 block">
                  contact@foreveryou.com
                </a>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 text-center">
              Copyright &copy; 2024 forever.com - All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </motion.div>
  );
}
