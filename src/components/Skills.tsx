import React from 'react';
import { Code, Database, Wrench, Server, GitBranch, Lightbulb, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-cyan-600 dark:text-cyan-400" size={24} />,
      skills: ['PHP', 'SQL', 'C++', 'JavaScript', 'HTML/CSS'],
      color: 'cyan'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Server className="text-emerald-600 dark:text-emerald-400" size={24} />,
      skills: ['Laravel', 'React JS', 'Next JS', 'Redux', 'Redux Toolkit', 'Material UI (MUI)', 'Bootstrap'],
      color: 'emerald'
    },
    {
      title: 'Databases',
      icon: <Database className="text-purple-600 dark:text-purple-400" size={24} />,
      skills: ['MySQL'],
      color: 'purple'
    },
    {
      title: 'Development Tools',
      icon: <Wrench className="text-orange-600 dark:text-orange-400" size={24} />,
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'VS Code', 'Postman', 'Chrome Dev Tools'],
      color: 'orange'
    },
    {
      title: 'Architectural Patterns',
      icon: <GitBranch className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ['MVC', 'Clean Code Architecture'],
      color: 'indigo'
    },
    {
      title: 'Concepts',
      icon: <Lightbulb className="text-yellow-600 dark:text-yellow-400" size={24} />,
      skills: ['Object-Oriented Programming (OOP)', 'SOLID Principles', 'RESTful APIs', 'Debugging', 'Testing'],
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 border-cyan-200 dark:border-cyan-700',
      emerald: 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-emerald-200 dark:border-emerald-700',
      purple: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700',
      orange: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700',
      indigo: 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border-indigo-200 dark:border-indigo-700',
      yellow: 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-700'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-50 border-gray-200';
  };

  const getSkillColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-800/40 dark:to-cyan-700/40 text-cyan-800 dark:text-cyan-200',
      emerald: 'bg-gradient-to-r from-emerald-100 to-emerald-200 dark:from-emerald-800/40 dark:to-emerald-700/40 text-emerald-800 dark:text-emerald-200',
      purple: 'bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-800/40 dark:to-purple-700/40 text-purple-800 dark:text-purple-200',
      orange: 'bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-800/40 dark:to-orange-700/40 text-orange-800 dark:text-orange-200',
      indigo: 'bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-800/40 dark:to-indigo-700/40 text-indigo-800 dark:text-indigo-200',
      yellow: 'bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-800/40 dark:to-yellow-700/40 text-yellow-800 dark:text-yellow-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              A comprehensive overview of my technical expertise, covering backend development, 
              database management, and modern development practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`${getColorClasses(category.color)} border-2 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-sm transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${getSkillColorClasses(category.color)} px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105 cursor-default shadow-sm hover:shadow-md`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg dark:shadow-black/50 max-w-4xl mx-auto transition-colors duration-300">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Sparkles className="text-cyan-600 dark:text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Core Competencies</h3>
                <Sparkles className="text-purple-600 dark:text-purple-400" size={28} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">Backend Development</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Expert in PHP and Laravel framework for building scalable server-side applications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">API Development</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Specialized in designing and implementing RESTful APIs for mobile and web applications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">Database Design</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Proficient in MySQL database design, optimization, and management</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">Clean Architecture</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Committed to writing maintainable, scalable code following industry best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">Team Collaboration</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Experience working in agile teams using Git, GitHub, and modern development workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">Frontend Integration</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Skilled in React.js and modern frontend technologies for full-stack development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;