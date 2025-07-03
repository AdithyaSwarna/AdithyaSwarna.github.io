import React from 'react';
import experience from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="border p-4 rounded bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">{job.role}</h3>
              <p className="italic text-gray-600 dark:text-gray-400">{job.company} • {job.duration}</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
