'use client';

import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiZap, FiCheck, FiTrendingUp } from 'react-icons/fi';

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
      className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-blue-900/80" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Performance pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="text-center">
          {/* Status with performance focus */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-blue-500/30 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <FiZap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">
              Performance-focused Engineer • Available for roles
            </span>
          </div>

          {/* Name */}
          <div
            className={`mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-2">
              Patrick Iyiakimo
            </h1>
          </div>

          {/* Title with performance emphasis */}
          <div
            className={`mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
              Full Stack Engineer
              <span className="block text-lg text-blue-400 font-normal mt-2">
                Specializing in high-performance applications
              </span>
            </h2>
          </div>

          {/* Performance-focused Introduction */}
          <div
            className={`max-w-2xl mx-auto mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I build web applications where every millisecond matters. 
              My focus is on creating <span className="text-white font-semibold">blazing-fast</span>, 
              <span className="text-white font-semibold"> scalable</span>, and 
              <span className="text-white font-semibold"> reliable</span> systems that deliver exceptional user experiences.
            </p>
          </div>

          {/* Performance Highlights */}
          <div
            className={`grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { icon: <FiZap className="w-4 h-4" />, label: 'Fast Load Times', desc: '< 2s FCP' },
              { icon: <FiTrendingUp className="w-4 h-4" />, label: 'Optimized', desc: '95+ Lighthouse' },
              { icon: <FiCheck className="w-4 h-4" />, label: 'Test Coverage', desc: '90%+ Unit Tests' },
            ].map((item) => (
              <div 
                key={item.label} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-blue-400">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-300">{item.label}</span>
                </div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div
            className={`max-w-2xl mx-auto mb-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-gray-300 italic">
                "Performance isn't just a feature—it's fundamental to user experience. 
                I measure success in milliseconds saved and frustration avoided."
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>View Performance Projects</span>
              <FiArrowDown className="w-4 h-4 group-hover:animate-bounce" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-transparent border-2 border-blue-500/50 text-white font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiMail className="w-4 h-4" />
              <span>Discuss Performance</span>
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center gap-6 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="https://github.com/patrickiyiakimo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-blue-500/30 rounded-lg text-white hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-iyiakimo-6a15a226a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-blue-500/30 rounded-lg text-white hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-800 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center space-y-2 text-blue-400 hover:text-white transition-colors duration-200"
          >
            <span className="text-sm font-medium">See My Performance Work</span>
            <FiArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;