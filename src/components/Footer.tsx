import React from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open("https://wa.me/201151915789", "_blank");
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  className="rounded-full w-8 h-8 bg-gradient-to-r"
                  src="/ali_logo.png"
                  alt="AA"
                />
                <span className="font-bold text-xl text-white">
                  Ali Al-Hamoli
                </span>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Backend Developer passionate about creating robust, scalable
                applications and contributing to meaningful projects that drive
                business success.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ali3lhamoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ali-alhamoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:alialhamoli475@gmail.com"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Experience", "#experience"],
                  ["Projects", "#projects"],
                  ["Skills", "#skills"],
                  ["Contact", "#contact"],
                ].map(([label, href], i) => (
                  <li key={i}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">
                Contact Info
              </h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Cairo, Egypt</p>
                <p>0115-191-5789</p>
                <p>alialhamoli475@gmail.com</p>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                >
                  Message on WhatsApp
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Ali Al-Hamoli. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
