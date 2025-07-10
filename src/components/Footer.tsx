import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open('https://wa.me/201151915789', '_blank');
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AA</span>
                </div>
                <span className="font-bold text-xl">Ali Al-Hamoli</span>
              </div>
              <p className="text-gray-300 mb-4">
                Backend Developer passionate about creating robust, scalable applications 
                and contributing to meaningful projects that drive business success.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ali3lhamoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ali-alhamoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:alialhamoli475@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>Cairo, Egypt</p>
                <p>0115-191-5789</p>
                <p>alialhamoli475@gmail.com</p>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                >
                  Message on WhatsApp
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} Ali Al-Hamoli. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
