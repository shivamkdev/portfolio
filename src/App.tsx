import * as React from "react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(systemPrefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300">Shivam Kumar Dubey</h1>
        <div className="space-x-4 text-sm flex items-center">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Resume</a>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-2">
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <h2 className="text-3xl font-bold mb-4">Hi, I'm Shivam 👋</h2>
        <p className="text-lg max-w-xl mx-auto">
          .NET Developer with 3 years of experience building scalable backend systems,
          clean APIs, and automation tools. Currently at Infosys, ex-Amazon intern.
        </p>
        <div className="mt-6 space-x-4">
          <a href="https://github.com/shivamkdev" target="_blank" className="text-sm text-white bg-gray-900 px-4 py-2 rounded">GitHub</a>
          <a href="https://www.linkedin.com/in/shivam-kumar-dubey-sde/" target="_blank" className="text-sm text-white bg-blue-600 px-4 py-2 rounded">LinkedIn</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-12 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-2xl font-semibold text-center mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
            {/* <img src="/assets/silent-sentinel.png" alt="Silent Sentinel Screenshot" className="w-full max-h-32 object-cover rounded mb-4" /> */}
            <h4 className="text-lg font-semibold mb-2">Silent Sentinel</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              A tool that keeps your system active by simulating user activity silently.
              Built with Win32 API & C#. Prevents server logout & automates background tasks.
            </p>
            <a href="https://rebrand.ly/silent-sentinel" target="_blank" className="text-sm text-blue-600 dark:text-blue-400">GitHub</a>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
            {/* <img src="/assets/vetometer.jpeg" alt="Vetometer Screenshot" className="w-full max-h-48 object-cover rounded mb-4" /> */}
            <h4 className="text-lg font-semibold mb-2">Vetometer</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              A Flutter app for creating and voting on live polls. Easy sharing, beautiful UI, and smooth UX.
            </p>
            <a href="https://rebrand.ly/vetometer" target="_blank" className="text-sm text-blue-600 dark:text-blue-400">GitHub</a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="px-6 py-12 bg-white dark:bg-gray-900">
        <h3 className="text-2xl font-semibold text-center mb-8">Experience</h3>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-semibold">Digital Specialist Engineer – Infosys</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2022 – Present</p>
            <ul className="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
              <li>Automated accessibility testing via custom C# library – 80% efficiency boost.</li>
              <li>Improved reliability of critical systems to 98%+ with circuit-breakers & retries.</li>
              <li>Upgraded legacy .NET app to .NET 6 – 40% faster load time.</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-semibold">SDE Intern – Amazon</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2022 – Jun 2022</p>
            <ul className="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
              <li>Designed 10+ AWS Lambda APIs for GDPR/CCPA compliance.</li>
              <li>Implemented SQS/DynamoDB based microservices architecture.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="text-center py-8 text-sm text-gray-600 dark:text-gray-400">
        <p>📧 shivamkdubey8900@gmail.com</p>
        <p>© 2025 Shivam Dubey. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default App;
