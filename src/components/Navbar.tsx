import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const sections = ["projects", "experience", "skills", "achievements", "contact"];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const MotionNav = motion.nav;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
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

      // ✅ Force "contact" as active if user scrolled to the bottom
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= pageHeight - 5) {
        setActiveSection("contact");
      } else if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const navLink = (id: string, label: string) => (
    <div className="relative">
      <span
        onClick={() => scrollToSection(id)}
        className={`cursor-pointer hover:underline px-1 ${activeSection === id ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
          }`}
      >
        {label}
      </span>
      {activeSection === id && (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"
        />
      )}
    </div>
  );

  return (
    <MotionNav
      initial={{ y: 0 }}
      animate={{ y: isHidden && window.innerWidth < 768 ? "-100%" : "0%" }} transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4
        backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-b border-white/10 shadow-sm"
    >
      <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300">Shivam Kumar Dubey</h1>
      <div className="space-x-4 text-sm flex items-center">
        {sections.map(id => navLink(id, id.charAt(0).toUpperCase() + id.slice(1)))}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          Resume
        </a>
        <button onClick={toggleDarkMode} className="ml-2">
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </MotionNav>
  );
};

export default Navbar;
