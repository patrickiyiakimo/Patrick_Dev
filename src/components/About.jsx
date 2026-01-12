'use client';

import { FiTarget, FiZap, FiLayers, FiCheck, FiCode, FiDatabase, FiGlobe } from 'react-icons/fi';

const About = () => {
  const skills = [
    { icon: <FiCode />, name: 'Full Stack Architecture', description: 'End-to-end system design and implementation' },
    { icon: <FiZap />, name: 'Performance Optimization', description: 'Identifying and fixing bottlenecks across stacks' },
    { icon: <FiDatabase />, name: 'Database Design', description: 'PostgreSQL schema design and optimization' },
    { icon: <FiLayers />, name: 'Enterprise Discipline', description: 'High standards with 98%+ test coverage' },
    { icon: <FiGlobe />, name: 'Production Deployment', description: 'Complete CI/CD and monitoring setup' },
    { icon: <FiCheck />, name: 'Startup Agility', description: 'Fast iteration without compromising quality' },
  ];

  const projects = [
    { 
      name: 'Rewindly', 
      description: 'Collaboration SaaS Platform',
      details: ['PostgreSQL Schema Design', 'React Performance Optimization', 'Full Stack Architecture']
    },
    { 
      name: 'Production Applications', 
      description: '3 End-to-End Deliveries',
      details: ['Complete Architecture Design', 'Deployment & DevOps', 'Performance Monitoring']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
            {/* Profile Intro */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl">
                  <FiTarget className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Professional Profile
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack Engineer & Performance Specialist
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I architect and optimize Full Stack applications with <span className="font-semibold text-gray-900 dark:text-white">enterprise-grade discipline</span>. 
                  My approach combines startup agility with enterprise rigor—shipping fast without breaking things.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Trained in high-performance environments with <span className="font-semibold text-gray-900 dark:text-white">98% test coverage standards</span>, 
                  I specialize in identifying and fixing performance bottlenecks across the entire stack.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/30">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <FiZap className="mr-3 text-blue-600 dark:text-blue-400" />
                Current Focus
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Building <span className="font-semibold text-gray-900 dark:text-white">Rewindly</span>, a collaboration SaaS platform where I handle everything from:
              </p>
              <ul className="space-y-3">
                {['PostgreSQL schema design and optimization', 'React performance optimization', 'Full stack architecture decisions', 'Deployment and monitoring setup'].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-8">
            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Competencies
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                        <span className="text-blue-600 dark:text-blue-400 text-xl">{skill.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Project Experience
              </h3>
              
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="pb-6 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.name}
                        </h4>
                        {index === 1 && (
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">
                            Delivered
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.details.map((detail, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Philosophy */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FiCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Quality Standards
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                98%+ test coverage is my baseline for any production application. Quality isn't negotiable.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FiZap className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Performance Focus
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Every application is optimized for speed, scalability, and optimal user experience.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <FiLayers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  End-to-End Ownership
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                From architecture to deployment and monitoring—I own the complete lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Open to remote roles where I can contribute to scalable architecture, 
            performance optimization, and building high-quality software with teams 
            that value engineering excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Let's Discuss Opportunities
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;