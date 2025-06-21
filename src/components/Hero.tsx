import React from "react";

const Hero: React.FC = () => (
  <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
    <h2 className="text-3xl font-bold mb-4">Hi, I'm Shivam 👋</h2>
    <p className="text-lg max-w-xl mx-auto">
      .NET Developer with 3 years of experience building scalable backend systems,
      clean APIs, and automation tools. Ex-Amazon Intern, currently at Infosys.
    </p>
    <div className="mt-6 space-x-4">
      <a href="https://github.com/shivamkdev" target="_blank" className="text-sm text-white bg-gray-900 px-4 py-2 rounded">GitHub</a>
      <a href="https://www.linkedin.com/in/shivam-kumar-dubey-sde/" target="_blank" className="text-sm text-white bg-blue-600 px-4 py-2 rounded">LinkedIn</a>
    </div>
  </section>
);

export default Hero;
