import React from "react";

const Experience: React.FC = () => (
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
);

export default Experience;
