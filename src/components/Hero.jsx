import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800" id="hero">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hi, I’m Adithya Swarna 👋</h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-700 dark:text-gray-300">
        Software Engineer | Oracle HCM Specialist | ML/NLP Enthusiast | IEEE Author | Full-Stack Developer
      </p>
      <div className="mt-6 flex gap-4">
        <a href="https://github.com/AdithyaSwarna" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded bg-black text-white dark:bg-white dark:text-black">
          GitHub
        </a>
        <a href="mailto:adithyaswarnassnv@gmail.com" className="px-4 py-2 border rounded border-gray-700 dark:border-white">
          Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;
