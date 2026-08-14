import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f5f0e6] text-black py-10 md:py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Top Links Section */}
      <div className="w-full border-b-2 border-gray-300/80 pb-8 md:pb-12">
        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tight text-center">
          <a
            href="https://github.com/VishalDipake"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:italic transition-all duration-300 hover:opacity-80"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-d-396163325/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:italic transition-all duration-300 hover:opacity-80"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vishaldipake072@gmail.com"
            className="hover:italic transition-all duration-300 hover:opacity-80"
          >
            Email
          </a>
          <a
            href="https://x.com/Vishall0072"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:italic transition-all duration-300 hover:opacity-80"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Bottom Information Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-8 sm:pt-10 text-center sm:text-left">
        <div>
          <h3 className="font-mono uppercase tracking-wider font-bold text-lg sm:text-xl">
            Vishal Dipake
          </h3>
          <p className="font-mono uppercase tracking-widest text-xs sm:text-sm text-gray-700 mt-1">
            Crafted By VISHAL
          </p>
        </div>

        <div>
          <p className="font-mono text-xs sm:text-sm text-gray-700 uppercase tracking-wider">
            © {currentYear} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
