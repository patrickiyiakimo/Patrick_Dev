'use client';

import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiExpress, 
  SiTailwindcss, 
  SiFlutter, 
  SiDart,
  SiFastapi 
} from 'react-icons/si';

const Skills = () => {
  const languages = [
    {
      name: 'JavaScript',
      icon: <FaJs className="w-8 h-8" />,
      level: 'Advanced',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      description: 'ES6+, Modern JavaScript, Async/Await'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="w-8 h-8" />,
      level: 'Advanced',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      description: 'Type Safety, Interfaces, Generics'
    },
    {
      name: 'Python',
      icon: <FaPython className="w-8 h-8" />,
      level: 'Intermediate',
      color: 'text-green-600',
      bgColor: 'bg-green-600/10',
      description: 'Scripting, Backend Development'
    },
    {
      name: 'Dart',
      icon: <SiDart className="w-8 h-8" />,
      level: 'Intermediate',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      description: 'Flutter Development'
    }
  ];

  const frontend = [
    {
      name: 'React',
      icon: <FaReact className="w-8 h-8" />,
      level: 'Advanced',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      description: 'Hooks, Context API, Performance Optimization'
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="w-8 h-8" />,
      level: 'Advanced',
      color: 'text-gray-900 dark:text-white',
      bgColor: 'bg-gray-900/10 dark:bg-white/10',
      description: 'App Router, Server Components, SSR/SSG'
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="w-8 h-8" />,
      level: 'Expert',
      color: 'text-orange-600',
      bgColor: 'bg-orange-600/10',
      description: 'Semantic HTML, Accessibility'
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="w-8 h-8" />,
      level: 'Advanced',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      description: 'Modern Layouts, Animations'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="w-8 h-8" />,
      level: 'Advanced',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      description: 'Utility-first, Responsive Design'
    },
    {
      name: 'Flutter',
      icon: <SiFlutter className="w-8 h-8" />,
      level: 'Intermediate',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      description: 'Cross-platform Mobile Development'
    }
  ];

  const backend = [
    {
      name: 'Node.js',
      icon: <FaNodeJs className="w-8 h-8" />,
      level: 'Advanced',
      color: 'text-green-600',
      bgColor: 'bg-green-600/10',
      description: 'Event-driven Architecture, Streams'
    },
    {
      name: 'Express.js',
      icon: <SiExpress className="w-8 h-8" />,
      level: 'Advanced',
      color: 'text-gray-900 dark:text-white',
      bgColor: 'bg-gray-900/10 dark:bg-white/10',
      description: 'REST APIs, Middleware, Routing'
    },
    {
      name: 'FastAPI',
      icon: <SiFastapi className="w-8 h-8" />,
      level: 'Intermediate',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      description: 'Python Async Framework, OpenAPI'
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my programming languages, frameworks, and tools
            that I use to build high-performance applications
          </p>
        </div>

        {/* Languages Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
            Programming Languages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang) => (
              <div 
                key={lang.name}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${lang.bgColor}`}>
                    <span className={lang.color}>{lang.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {lang.name}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${getLevelColor(lang.level)}`}></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {lang.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {lang.description}
                </p>
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
            Frontend Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontend.map((tech) => (
              <div 
                key={tech.name}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${tech.bgColor}`}>
                      <span className={tech.color}>{tech.icon}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {tech.name}
                    </h4>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(tech.level)}/20 text-gray-700 dark:text-gray-300`}>
                    {tech.level}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {tech.description}
                </p>
                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full ${tech.color.replace('text-', 'bg-')} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: tech.level === 'Expert' ? '95%' : 
                             tech.level === 'Advanced' ? '85%' : 
                             tech.level === 'Intermediate' ? '70%' : '50%' 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
            Backend & APIs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backend.map((tech) => (
              <div 
                key={tech.name}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${tech.bgColor}`}>
                      <span className={tech.color}>{tech.icon}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {tech.name}
                    </h4>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(tech.level)}/20 text-gray-700 dark:text-gray-300`}>
                    {tech.level}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {tech.description}
                </p>
                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {tech.name === 'Node.js' && ['Streams', 'Events', 'Async'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                  {tech.name === 'Express.js' && ['Middleware', 'REST', 'Routing'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                  {tech.name === 'FastAPI' && ['Async', 'OpenAPI', 'Pydantic'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Development Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Performance First', desc: 'Optimized load times and efficient code' },
              { title: 'Clean Code', desc: 'Readable, maintainable, and well-documented' },
              { title: 'Testing', desc: 'Comprehensive test coverage and automation' },
              { title: 'Responsive Design', desc: 'Cross-device compatibility and UX focus' },
            ].map((principle) => (
              <div key={principle.title} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {principle.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;