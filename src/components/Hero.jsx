'use client';

import { useState, useEffect } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiCode,
  FiServer,
  FiDatabase,
  FiLayout,
} from 'react-icons/fi';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full translate-y-48 -translate-x-48" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Intro */}
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Open to mid-level opportunities
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                Patrick
                <span className="text-blue-600 dark:text-blue-400"> Iyiakimo</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Mid-Level Full Stack Engineer
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-xl">
                I design and build production-ready web applications with a focus
                on performance, scalability, and clean architecture. I enjoy
                owning features end-to-end—from idea to deployment—and
                collaborating with teams to ship reliable software.
              </p>
            </div>

            {/* Tech Stack */}
            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Core Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'React', icon: <FiCode /> },
                  { name: 'Next.js', icon: <FiLayout /> },
                  { name: 'TypeScript', icon: <FiCode /> },
                  { name: 'Node.js', icon: <FiServer /> },
                  { name: 'PostgreSQL', icon: <FiDatabase /> },
                  { name: 'MongoDB', icon: <FiDatabase /> },
                  { name: 'Docker', icon: <FiLayout /> },
                  { name: 'AWS', icon: <FiServer /> },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    <span className="mr-2 text-blue-600 dark:text-blue-400">
                      {tech.icon}
                    </span>
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                View My Work
                <FiArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <FiMail className="w-4 h-4" />
                Get In Touch
              </button>
            </div>

            {/* Socials */}
            <div
              className={`flex items-center space-x-4 pt-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:text-blue-600 hover:border-blue-500 transition-all"
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:text-blue-600 hover:border-blue-500 transition-all"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT – PROFESSIONAL SNAPSHOT */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Professional Snapshot
              </h3>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Experience</span>
                <span className="font-medium">3+ Years</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Projects Delivered</span>
                <span className="font-medium">20+</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Primary Stack</span>
                <span className="font-medium">
                  React · Node · PostgreSQL
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Current Focus</span>
                <span className="font-medium">
                  Scalable systems & APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
