'use client';

import { useState } from 'react';
import { 
  FiCode, FiCpu, FiDatabase, FiExternalLink, FiGithub, 
  FiLayers, FiShield, FiTrendingUp, FiZap 
} from 'react-icons/fi';
import { SiAwsamplify, SiDocker, SiFastapi, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Rewindly',
      description: 'A collaboration SaaS platform for team productivity with real-time features',
      longDescription: 'Built from scratch with enterprise-grade architecture, handling everything from database design to frontend performance optimization. Features include real-time collaboration, file sharing, task management, and team analytics.',
      category: 'fullstack',
      status: 'In Development',
      tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Real-time'],
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" />, color: 'text-gray-900 dark:text-white' },
        { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" />, color: 'text-blue-600' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5" />, color: 'text-blue-500' },
        { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" />, color: 'text-green-600' },
      ],
      performance: {
        loadTime: '1.2s',
        lighthouse: 98,
        coverage: 95,
        uptime: '99.9%'
      },
      challenges: [
        'Real-time synchronization across multiple clients',
        'Database schema optimization for millions of records',
        'Frontend performance optimization for complex UI'
      ],
      solutions: [
        'Implemented WebSocket connections with efficient state management',
        'Designed normalized database schema with proper indexing',
        'Used React.memo and virtualization for large datasets'
      ],
      liveUrl: 'https://rewindly-app.vercel.app/',
      githubUrl: 'https://github.com/patrickiyiakimo/rewindly',
      featured: true
    },
    {
      id: 2,
      title: 'Kingz World E-Commerce',
      description: 'Advanced multi-vendor e-commerce platform with AR clothing try-on and logistics integration',
      longDescription: 'A sophisticated full-stack e-commerce solution supporting multiple vendors, partnerships, logistics applications, AR clothing try-on, and comprehensive order tracking system. Built with scalability and user experience as primary considerations.',
      category: 'fullstack',
      status: 'Completed',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'AR Technology', 'Multi-vendor', 'Logistics'],
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" />, color: 'text-gray-900 dark:text-white' },
        { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" />, color: 'text-green-600' },
        { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5" />, color: 'text-green-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" />, color: 'text-teal-500' },
        { name: 'Docker', icon: <SiDocker className="w-5 h-5" />, color: 'text-blue-500' },
      ],
      performance: {
        loadTime: '1.4s',
        lighthouse: 92,
        coverage: 90,
        uptime: '99.8%'
      },
      challenges: [
        'Implementing multi-vendor architecture with separate storefronts',
        'AR clothing try-on feature with accurate sizing and fit visualization',
        'Real-time order tracking and logistics integration',
        'Managing inventory across multiple vendor warehouses',
        'Payment gateway integration for split payments to vendors'
      ],
      solutions: [
        'Designed microservices architecture for vendor separation',
        'Integrated 8th Wall WebAR for browser-based AR try-on experience',
        'Built WebSocket connections for real-time tracking updates',
        'Implemented inventory synchronization with conflict resolution',
        'Used Stripe Connect for handling multi-party payments'
      ],
      features: [
        'Multi-vendor marketplace with individual storefronts',
        'AR virtual try-on for clothing using WebAR technology',
        'Logistics partner application and management system',
        'Real-time order tracking with map integration',
        'Advanced search with filters and recommendations',
        'Vendor dashboard with analytics and reporting',
        'Partnership program with revenue sharing'
      ],
      liveUrl: 'https://pretty-fashion-hub.vercel.app/',
      githubUrl: 'https://github.com/patrickiyiakimo/pretty_fashion_hub',
      featured: true,
      metrics: {
        vendors: '50+',
        products: '1000+',
        transactions: '5000+',
        users: '10000+'
      }
    },
    {
      id: 3,
      title: 'E-Commerce Analytics Dashboard',
      description: 'Real-time analytics platform for e-commerce businesses with predictive insights',
      longDescription: 'A comprehensive dashboard that processes millions of transactions to provide real-time insights, predictive analytics, and automated reporting for e-commerce businesses.',
      category: 'backend',
      status: 'Completed',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
      technologies: [
        { name: 'Python', icon: <SiPython className="w-5 h-5" />, color: 'text-green-600' },
        { name: 'FastAPI', icon: <SiFastapi className="w-5 h-5" />, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5" />, color: 'text-blue-500' },
        { name: 'AWS', icon: <SiAwsamplify className="w-5 h-5" />, color: 'text-orange-500' },
      ],
      performance: {
        loadTime: '0.8s',
        lighthouse: 96,
        coverage: 92,
        uptime: '99.95%'
      },
      challenges: [
        'Processing high-volume real-time data streams',
        'Maintaining sub-second response times under load',
        'Ensuring data consistency across distributed systems'
      ],
      solutions: [
        'Implemented Redis caching and connection pooling',
        'Used asynchronous processing with Celery workers',
        'Applied database sharding and read replicas'
      ],
      liveUrl: 'https://dashboard.example.com',
      githubUrl: 'https://github.com/patrickiyiakimo/ecommerce-analytics',
      featured: true
    },
    {
      id: 4,
      title: 'Performance Monitoring Tool',
      description: 'Tool for monitoring and optimizing web application performance metrics',
      longDescription: 'A comprehensive monitoring solution that tracks web vitals, API response times, and server performance metrics with custom alerts and optimization recommendations.',
      category: 'fullstack',
      status: 'Completed',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Monitoring'],
      technologies: [
        { name: 'React', icon: <SiReact className="w-5 h-5" />, color: 'text-cyan-500' },
        { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" />, color: 'text-green-600' },
        { name: 'Docker', icon: <SiDocker className="w-5 h-5" />, color: 'text-blue-500' },
        { name: 'Tailwind', icon: <SiTailwindcss className="w-5 h-5" />, color: 'text-teal-500' },
      ],
      performance: {
        loadTime: '0.9s',
        lighthouse: 99,
        coverage: 94,
        uptime: '99.99%'
      },
      challenges: [
        'Real-time data visualization for performance metrics',
        'Low-latency WebSocket connections',
        'Memory optimization for long-running processes'
      ],
      solutions: [
        'Used D3.js for interactive data visualizations',
        'Implemented connection pooling and message batching',
        'Applied garbage collection optimization strategies'
      ],
      liveUrl: 'https://monitor.example.com',
      githubUrl: 'https://github.com/patrickiyiakimo/performance-monitor',
      featured: false
    },
    {
      id: 5,
      title: 'API Gateway Microservice',
      description: 'Scalable API gateway with rate limiting, authentication, and caching',
      longDescription: 'A high-performance API gateway built with microservices architecture, featuring rate limiting, JWT authentication, response caching, and request routing.',
      category: 'backend',
      status: 'Completed',
      tags: ['Node.js', 'Redis', 'Microservices', 'Docker', 'Kubernetes'],
      technologies: [
        { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" />, color: 'text-green-600' },
        { name: 'Docker', icon: <SiDocker className="w-5 h-5" />, color: 'text-blue-500' },
        { name: 'Redis', icon: <FiDatabase className="w-5 h-5" />, color: 'text-red-600' },
      ],
      performance: {
        loadTime: '0.3s',
        lighthouse: null,
        coverage: 90,
        uptime: '99.99%'
      },
      challenges: [
        'Handling 10k+ requests per second',
        'Maintaining low latency with authentication checks',
        'Distributed rate limiting across multiple instances'
      ],
      solutions: [
        'Implemented Redis for distributed rate limiting',
        'Used JWT for stateless authentication',
        'Applied connection pooling and keep-alive connections'
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/patrickiyiakimo/api-gateway',
      featured: false
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 mb-6">
            <FiCode className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Performance-Optimized Projects
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Engineering Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of production-grade applications built with enterprise standards, 
            focusing on performance, scalability, and maintainability.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
              <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                filter === cat.id
                  ? 'bg-white/20'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
                project.featured ? 'relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-500 before:via-cyan-500 before:to-blue-500 before:rounded-t-2xl' : ''
              }`}
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      {project.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold">
                          <FiZap className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'In Development' 
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                          : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4 lg:mt-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        <FiGithub className="w-5 h-5 mr-2" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <FiExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Long Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FiCode className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                        Project Overview
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FiCpu className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                        Technologies Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center px-4 py-2.5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600"
                          >
                            <span className={`mr-2 ${tech.color}`}>{tech.icon}</span>
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Metrics & Challenges */}
                  <div className="space-y-6">
                    {/* Performance Metrics */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <FiTrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                        Performance Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.performance).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {value || 'N/A'}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges & Solutions */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FiShield className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                        Engineering Challenges
                      </h4>
                      <div className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {challenge}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FiLayers className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                        Solutions Implemented
                      </h4>
                      <div className="space-y-3">
                        {project.solutions.map((solution, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {solution}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Bottom Bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <FiCode className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              No projects match the selected filter. Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;