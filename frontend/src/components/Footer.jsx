import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// You can create a data array for links to keep it cleaner
const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'Collection', href: '/collection' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'About Us', href: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8  ">
        
          <div className="md:col-span-12 lg:col-span-5">
            {/* <h3 className="text-2xl font-bold text-gray-900">
              Dukan<span className="text-purple-600">.</span>
            </h3> */}
            <Link to='/'><img src={logo} alt="Dukan Logo" className="w-30" /></Link>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="hidden md:block md:col-span-3 lg:hidden"></div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Company
            </h4>
            <nav className="mt-4">
              <ul className="space-y-3">
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
            </nav>
          </div>

          <div className="md:col-span-5 lg:col-span-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Get in touch
            </h4>
            <div className="mt-4 space-y-3">
              <p>
                <a
                  href="tel:+12124567890"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  +1 212-456-7890
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@foreveryou.com"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  contact@foreveryou.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            Copyright &copy; 2024 forever.com - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}