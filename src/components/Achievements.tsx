import React from "react";

const Achievements: React.FC = () => (
  <section id="achievements" className="px-6 py-12 bg-white dark:bg-gray-900">
    <h3 className="text-2xl font-semibold text-center mb-8">Achievements & Client Feedback</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow">
        <p className="text-sm text-gray-800 dark:text-gray-200">🏆 Infosys Hackathon Winner – Automating accessibility testing with C#.</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow">
        <p className="text-sm text-gray-800 dark:text-gray-200">💬 “One of the most reliable developers we’ve worked with.” – Project Manager</p>
      </div>
    </div>
  </section>
);

export default Achievements;
