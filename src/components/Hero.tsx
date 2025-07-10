import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/201151915789", "_blank");
  };

  return (
    <section
      id="home"
      className="pt-16 relative transition-colors duration-300 bg-black"
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/aliblack.png)",
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col min-h-screen">
        <div className="max-w-4xl mx-auto text-center pb-20 pt-[60vh] flex-1 flex flex-col justify-end">
          <div className="mt-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              Ali Al-Hamoli
            </h1>
            <p className="text-xl md:text-3xl text-cyan-300 font-semibold mb-6 drop-shadow-lg">
              Backend Developer
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300 mb-8">
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

          <div className="max-w-3xl mx-auto mb-8 backdrop-blur-md rounded-2xl p-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              Driven Backend Developer with a Bachelor's in Communication &
              Computers Engineering. Aspiring to evolve into a Software Engineer
              role—actively involved in architectural design, strategic
              decisions, and long-term system planning. Passionate about
              contributing beyond coding—focused on shaping technical direction,
              ensuring code quality, and collaborating across teams.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-emerald-400/30"
            >
              <MessageCircle size={20} />
              <span>Contact on WhatsApp</span>
            </button>

            <a
              href="https://linkedin.com/in/ali-alhamoli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-blue-500/25"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Ali3lhamoli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 text-white rounded-lg hover:from-slate-900 hover:to-black dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-slate-400/25"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
