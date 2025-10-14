import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["Objective", "Vision", "Members", "Lectures", "Contact Us"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center text-white">
        <a
          href="#Hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("Hero");
          }}
          className="text-2xl md:text-3xl oait-logo focus:outline-none cursor-pointer"
          aria-label="Go to top of the page (Hero section)"
        >
          OAIT
        </a>

        <ul className="hidden md:flex space-x-8 lg:space-x-12 font-semibold text-base lg:text-lg">
          {sections.map((item) => {
            const sectionId = item.toLowerCase().replace(/\s+/g, "-");
            return (
              <li key={item}>
                <a
                  href={`#${sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className="hover:text-gray-300 transition-colors focus:outline-none cursor-pointer"
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold z-40 transition-all duration-300"
        >
          {sections.map((item) => {
            const sectionId = item.toLowerCase().replace(/\s+/g, "-");
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sectionId);
                }}
                className="hover:text-gray-300 transition-colors focus:outline-none"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
