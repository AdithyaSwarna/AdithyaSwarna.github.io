import React from 'react';
import certifications from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="px-6 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
          {certifications.map((cert, index) => (
            <li key={index}>
              <a href={cert.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
