import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

useEffect(() => {
  const sections = ["projects", "experience", "skills", "achievements", "contact"];
  const onScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    let found = false;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(id);
          found = true;
          break;
        }
      }
    }

    if (!found) {
      setActiveSection(""); // no match found, clear highlight
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // Run on mount too
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  const navLink = (id: string, label: string) => (
    <span
      onClick={() => scrollToSection(id)}
      className={`cursor-pointer hover:underline ${activeSection === id ? "font-bold text-blue-600 dark:text-blue-400" : ""}`}
    >
      {label}
    </span>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-800 backdrop-blur bg-opacity-90">
      <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300">Shivam Kumar Dubey</h1>
      <div className="space-x-4 text-sm flex items-center">
        {navLink("projects", "Projects")}
        {navLink("experience", "Experience")}
        {navLink("skills", "Skills")}
        {navLink("achievements", "Achievements")}
        {navLink("contact", "Contact")}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Resume</a>
        <button onClick={toggleDarkMode} className="ml-2">
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
