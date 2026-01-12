'use client';

import { FiCheck, FiZap, FiShield, FiTrendingUp, FiUsers, FiTarget, FiCalendar, FiGlobe } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Aurray.ai',
      location: 'London · Remote',
      role: 'Software Engineer',
      period: 'Nov 2023 - Present',
      duration: '1 yr 8 mos',
      description: 'Developing real-time trading dashboards and AI-powered financial platforms with focus on high-performance data visualization and responsive design.',
      achievements: [
        'Developed dynamic trading dashboards visualizing live market data and AI-generated trading signals with sub-second latency',
        'Engineered high-performance charting components handling 10,000+ real-time data points while maintaining 60fps',
        'Led responsive design implementation increasing mobile user engagement by 35%',
        'Built reusable React component library for trading-specific UI patterns',
        'Reduced initial load time by 40% through performance optimizations and code splitting'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'WebSocket', 'WebGL', 'Chart.js', 'Tailwind CSS', 'Storybook'],
      metrics: {
        testCoverage: '95%',
        performance: '90+ Lighthouse',
        uptime: '99.8%',
        deployments: '100+'
      },
      featured: true
    },
    {
      id: 2,
      company: 'Dot Campus Africa',
      location: 'Lagos State, Nigeria · Remote',
      role: 'Junior Full Stack Engineer & Web Tutor',
      period: 'Mar 2024 - Jun 2025',
      duration: '1 yr 4 mos',
      description: 'Contributed to educational applications while mentoring junior developers in modern web development practices.',
      achievements: [
        'Contributed to applications maintaining 98% test coverage standards, reducing production bugs by 40%',
        'Built and maintained Storybook components adopted by 5+ teams, improving UI consistency',
        'Collaborated with senior engineers to implement performance-optimized React architecture',
        'Tutored junior developers in React best practices and testing strategies',
        'Participated in rigorous code reviews focused on performance and maintainability'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Storybook', 'Jest', 'Docker', 'Tailwind CSS', 'Express'],
      metrics: {
        testCoverage: '98%',
        performance: '92+ Lighthouse',
        uptime: '99.5%',
        deployments: '80+'
      },
      featured: true
    },
    {
      id: 3,
      company: 'Richfill MultiServices Enterprises',
      location: 'Lekki, Lagos State, Nigeria · Remote',
      role: 'Junior Frontend Engineer',
      period: 'Feb 2025 - Jun 2025',
      duration: '5 mos',
      description: 'Focused on SEO optimization, quality assurance, and client communication for various web projects.',
      achievements: [
        'Implemented technical SEO improvements including meta tag optimization and sitemap generation',
        'Conducted cross-browser and device testing ensuring consistent user experiences',
        'Translated client requirements into technical specifications and provided progress updates',
        'Provided ongoing website maintenance, security updates, and performance monitoring',
        'Improved page speed through performance optimizations and asset management'
      ],
      technologies: ['Next.js', 'React', 'SEO', 'Performance', 'Testing', 'TypeScript', 'CSS', 'JavaScript'],
      metrics: {
        testCoverage: '85%',
        performance: '88+ Lighthouse',
        uptime: '99.2%',
        deployments: '30+'
      },
      featured: false
    }
  ];

  const skills = [
    {
      category: 'Performance Optimization',
      items: [
        'Lighthouse optimization (90+ scores)',
        'Bundle size reduction & Code splitting',
        'Real-time data handling (WebSocket)',
        'Database query optimization'
      ]
    },
    {
      category: 'Testing & Quality',
      items: [
        'Unit Testing (Jest, React Testing Library)',
        'Integration Testing (98% coverage)',
        'E2E Testing (Cypress)',
        'Code Review & Quality Assurance',
        'Storybook component development'
      ]
    },
    {
      category: 'Development Practices',
      items: [
        'Agile/Scrum Methodology',
        'CI/CD Pipeline Development',
        'Cross-functional team collaboration',
        'Technical Documentation',
        'Performance Monitoring'
      ]
    },
    {
      category: 'Frontend Architecture',
      items: [
        'Component Library Development',
        'Responsive Design Systems',
        'Real-time Data Visualization',
        'WebGL & High-performance Rendering',
        'Progressive Web Apps'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 mb-6">
            <FiCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              3+ Years Progressive Experience
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building high-performance applications with enterprise standards across international teams. 
            Focused on quality, performance, and scalable architecture.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 rounded-full"></div>
          
          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 rounded-full border-4 border-blue-500 z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden ${
                    exp.featured ? 'before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-emerald-500 before:rounded-t-2xl' : ''
                  }`}>
                    {/* Company & Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          {exp.featured && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-xs font-semibold">
                              <FiTarget className="w-3 h-3 mr-1" />
                              Featured Role
                            </span>
                          )}
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.company}
                        </h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <FiGlobe className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 sm:mt-0 sm:text-right">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.role}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Metrics */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <FiTrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                          Performance Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(exp.metrics).map(([key, value]) => (
                            <div key={key} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">
                                {value}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Expertise Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Expertise & Methodologies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg">
                    {index === 0 && <FiZap className="w-5 h-5 text-white" />}
                    {index === 1 && <FiShield className="w-5 h-5 text-white" />}
                    {index === 2 && <FiUsers className="w-5 h-5 text-white" />}
                    {index === 3 && <FiTarget className="w-5 h-5 text-white" />}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h4>
                </div>
                
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Philosophy */}
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/30">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Performance-First Development Philosophy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I believe that exceptional software isn't just about features—it's about delivering 
                fast, reliable, and maintainable experiences. My approach combines rigorous testing 
                (90-98% coverage) with performance optimization (90+ Lighthouse scores) to ensure 
                applications scale gracefully while maintaining high quality standards.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { label: 'Test Coverage', value: '90-98%', icon: <FiShield /> },
                  { label: 'Lighthouse Score', value: '90+', icon: <FiZap /> },
                  { label: 'System Uptime', value: '99.5%+', icon: <FiTrendingUp /> },
                  { label: 'Projects Delivered', value: '15+', icon: <FiCheck /> },
                ].map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl mb-2">
                      <span className="text-blue-600 dark:text-blue-400 text-xl">
                        {metric.icon}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Current Focus Areas
                </h4>
                <ul className="space-y-3">
                  {[
                    'Real-time Data Visualization',
                    'Performance Optimization',
                    'Component Library Design',
                    'Testing Strategy Implementation'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;