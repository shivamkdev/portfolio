import React from "react";

const Projects: React.FC = () => (
  <section id="projects" className="px-6 py-12 bg-gray-100 dark:bg-gray-800">
    <h3 className="text-2xl font-semibold text-center mb-8">Projects</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h4 className="text-lg font-semibold mb-2">Silent Sentinel</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          A tool that keeps your system active by simulating user activity silently.
          Built with Win32 API & C#. Prevents server logout & automates background tasks.
        </p>
        <a href="https://rebrand.ly/silent-sentinel" target="_blank" className="text-sm text-blue-600 dark:text-blue-400">GitHub</a>
      </div>
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h4 className="text-lg font-semibold mb-2">Vetometer</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          A Flutter app for creating and voting on live polls. Easy sharing, beautiful UI, and smooth UX.
        </p>
        <a href="https://rebrand.ly/vetometer" target="_blank" className="text-sm text-blue-600 dark:text-blue-400">GitHub</a>
      </div>
    </div>
  </section>
);

export default Projects;
