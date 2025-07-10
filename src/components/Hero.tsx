import React from 'react';
import { MapPin, Phone, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/201151915789', '_blank');
  };

  return (
    <section 
      id="home" 
      className="pt-16 relative transition-colors duration-300 bg-black"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/aliblack.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000'
      }}
    >
      {/* Gradient overlay that starts from the bottom half */}
      {/* <div 
        className="absolute inset-0 transition-colors duration-300"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 70%)'
        }}
      ></div> */}
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col min-h-screen">
        {/* Content positioned at the bottom */}
        <div className="max-w-4xl mx-auto text-center pb-20 pt-[60vh] flex-1 flex flex-col justify-end">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              Ali Al-Hamoli
            </h1>
            <p className="text-xl md:text-3xl text-cyan-300 font-semibold mb-6 drop-shadow-lg">
              Backend Developer
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-200 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>0115-191-5789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>alialhamoli475@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-8 bg-black/90 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <p className="text-lg text-gray-100 leading-relaxed">
              Driven Backend Developer with a Bachelor's in Communication & Computers Engineering. 
              Aspiring to evolve into a Software Engineer role—actively involved in architectural design, 
              strategic decisions, and long-term system planning. Passionate about contributing beyond 
              coding—focused on shaping technical direction, ensuring code quality, and collaborating across teams.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleWhatsApp}
             className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              <MessageCircle size={20} />
              <span>Contact on WhatsApp</span>
            </button>
            <a
              href="https://linkedin.com/in/ali-alhamoli"
              target="_blank"
              rel="noopener noreferrer"
             className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Ali3lhamoli"
              target="_blank"
              rel="noopener noreferrer"
             className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        {/* Extended black background section */}
        <div className="bg-black w-full h-32"></div>
      </div>
    </section>
  );
};

export default Hero;