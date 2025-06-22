import * as React from "react";
import { skills } from "../data/skills";

const Skills: React.FC = () => (
  <section id="skills" className="px-6 py-12 bg-gray-100 dark:bg-gray-800">
    <h3 className="text-2xl font-semibold text-center mb-8">Skills & Tools</h3>
    <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
      {skills.map(skill => (
        <span key={skill} className="bg-blue-600 dark:bg-blue-500 px-4 py-2 rounded-lg shadow">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;
