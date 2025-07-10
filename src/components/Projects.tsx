import React from 'react';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PNT Delivery Platform',
      year: '2025',
      tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Blade'],
      description: 'Contributed as a Backend Developer in a large-scale delivery system consisting of multiple dashboards and mobile applications.',
      highlights: [
        'Fully developed the backend of the drivers\' mobile application',
        'Implemented authentication, delivery task handling, status updates, and notifications',
        'Enhanced backend functionality across multiple dashboards',
        'Designed RESTful APIs for seamless client communication'
      ],
      hasWebsite: true,
      websiteUrl: 'https://oms.pntexpress.com/',
      hasGithub: false,
      githubUrl: ''
    },
    {
      title: 'Abtalna Job Platform',
      year: '2025',
      tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Blade'],
      description: 'Worked as a Laravel Backend and Full Stack Developer on a job platform specialized for delivery workers.',
      highlights: [
        'Developed robust RESTful APIs for mobile application functionalities',
        'Implemented user/company registration, job listings, and applications',
        'Enhanced admin dashboard using Laravel Blade',
        'Focused on scalability and performance optimization'
      ],
      hasWebsite: true,
      websiteUrl: 'https://abtalna.dynootech.com/',
      hasGithub: false,
      githubUrl: ''
    },
    {
      title: 'E-commerce REST API System',
      year: '2025',
      tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
      description: 'Designed and developed an E-commerce backend system using Laravel with an API-first architecture.',
      highlights: [
        'Built core modules: user registration/login, product catalog, cart, orders',
        'Created RESTful endpoints for CRUD operations',
        'Handled database design, migrations, and request validation',
        'Followed MVC, middleware, and policy-based authorization best practices'
      ],
      hasWebsite: false,
      websiteUrl: '',
      hasGithub: true,
      githubUrl: 'https://github.com/Ali3lhamoli'
    },
    {
      title: 'Social Networking Platform',
      year: '2024',
      tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Blade'],
      description: 'Developed a social networking platform allowing users to register, create posts, interact through likes and comments.',
      highlights: [
        'Implemented authentication and post management',
        'Built real-time notifications system',
        'Designed scalable database schema',
        'Used MVC architecture and clean code principles'
      ],
      hasWebsite: false,
      websiteUrl: '',
      hasGithub: true,
      githubUrl: 'https://github.com/Ali3lhamoli'
    },
    {
      title: 'Book Borrowing System',
      year: '2024',
      tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Blade'],
      description: 'Created a web-based system for borrowing and returning books, targeting libraries and educational institutions.',
      highlights: [
        'Users can browse books, check availability, borrow, and return',
        'Built dynamic admin panel for managing books and users',
        'Focused on data integrity and admin functionalities',
        'Implemented comprehensive borrowing history tracking'
      ],
      hasWebsite: false,
      websiteUrl: '',
      hasGithub: true,
      githubUrl: 'https://github.com/Ali3lhamoli'
    },
    {
      title: 'Data Sharing & Organizing (Sharikna App)',
      year: '2024',
      tech: ['PHP', 'MySQL', 'REST APIs'],
      description: 'Sharikna is an innovative mobile application designed for efficient data sharing and organization on Android and Web platforms.',
      highlights: [
        'Features data sharing and efficient retrieval',
        'Implemented group chat functionality',
        'Added business integration capabilities',
        'Adheres to clean code architecture principles'
      ],
      hasWebsite: false,
      websiteUrl: '',
      hasGithub: true,
      githubUrl: 'https://github.com/Ali3lhamoli'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              A showcase of my backend development work, featuring scalable applications 
              and robust API solutions built with modern technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="text-cyan-600 dark:text-cyan-400 transition-colors duration-300" size={20} />
                    <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center transition-colors duration-300">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {project.hasWebsite && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg hover:from-cyan-200 hover:to-purple-200 dark:hover:from-cyan-800/40 dark:hover:to-purple-800/40 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.hasGithub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg hover:from-cyan-200 hover:to-purple-200 dark:hover:from-cyan-800/40 dark:hover:to-purple-800/40 transition-all duration-300"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed transition-colors duration-300">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 transition-colors duration-300">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-xs font-medium transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Ali3lhamoli"
              target="_blank"
              rel="noopener noreferrer"
             className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white rounded-lg hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              <span>View More Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;