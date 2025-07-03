import React from 'react';
import education from '../data/education';

const Education = () => {
  return (
    <section id="education" className="px-6 py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="italic text-gray-600 dark:text-gray-400">{edu.institution}</p>
            <p className="text-gray-700 dark:text-gray-300">{edu.duration} • GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
