import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = ["Objective", "Vision", "Research", "Members", "Lectures"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-[48px] py-3 flex justify-between items-center text-white">
        <button
          onClick={() => scrollToSection("Hero")}
          className="text-[32px] oait-logo focus:outline-none cursor-pointer"
        >
          OAIT
        </button>

        <ul className="flex space-x-12 default-font font-semibold text-[18px]">
          {sections.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-gray-300 transition-colors focus:outline-none cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
