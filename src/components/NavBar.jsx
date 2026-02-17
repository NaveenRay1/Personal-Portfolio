import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import githubIcon from "../assets/img/github.svg";
import leetcodeIcon from "../assets/img/leetcode.png";
import gfgIcon from "../assets/img/geeksforgeeks.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#121212] shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-28" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveLink(link.id)}
              className={`text-lg transition-all duration-300 ${
                activeLink === link.id
                  ? "text-white opacity-100"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://github.com/NaveenRay1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white/50 rounded-full hover:bg-white transition"
            >
              <img src={githubIcon} alt="GitHub" className="w-5" />
            </a>

            <a
              href="https://leetcode.com/u/Naveen_Ray_17/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white/50 rounded-full hover:bg-white transition"
            >
              <img src={leetcodeIcon} alt="LeetCode" className="w-5" />
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/navennnn01?tab=activity"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white/50 rounded-full hover:bg-white transition"
            >
              <img src={gfgIcon} alt="GFG" className="w-5" />
            </a>
          </div>

          {/* Connect Button */}
          <a
            href="#connect"
            className="ml-6 px-6 py-3 border border-white text-white font-semibold hover:bg-white hover:text-[#121212] transition"
          >
            Let’s Connect
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#121212] flex flex-col items-center justify-center gap-10 text-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveLink(link.id);
                setMenuOpen(false);
              }}
              className="hover:text-white/70 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#connect"
            onClick={() => setMenuOpen(false)}
            className="mt-6 px-8 py-4 border border-white hover:bg-white hover:text-[#121212] transition"
          >
            Let’s Connect
          </a>
        </div>
      )}
    </header>
  );
};
