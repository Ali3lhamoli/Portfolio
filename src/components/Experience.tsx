import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Dyno Tech",
      position: "Backend Developer",
      type: "hybrid",
      location: "Tanta, Gharbia",
      duration: "March 2025 – Present",
      current: true,
      responsibilities: [
        "Designing and implementing RESTful APIs for web applications using Laravel",
        "Working with MySQL databases to manage and optimize data operations",
        "Implementing authentication, authorization, and security best practices in backend systems",
        "Writing unit tests and performing debugging to ensure high code quality and performance",
        "Participating in code reviews and team discussions to continuously improve the development process",
      ],
    },
    {
      company: "DeveTechno Company",
      position: "Backend Developer",
      type: "on-site",
      location: "Tanta, Gharbia",
      duration: "October 2024 – February 2025",
      current: false,
      responsibilities: [
        "Built and maintained backend services for mobile applications using PHP and Laravel",
        "Integrated Firebase for real-time features and push notifications",
        "Collaborated with frontend and Flutter teams to design robust APIs and ensure smooth data flow",
        "Followed Clean Code principles and MVC architecture to write maintainable and scalable code",
        "Used Git and GitHub for version control and collaborated with team members via Agile methodology",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-[#f9f9f9] dark:bg-black transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Building robust backend solutions and collaborating with
              cross-functional teams to deliver scalable applications.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-500/10 dark:shadow-black/40 p-6 md:p-8 relative overflow-hidden transition-all duration-300"
              >
                {exp.current && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl shadow-md">
                    Current
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                        <Briefcase
                          className="text-cyan-600 dark:text-cyan-400"
                          size={20}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs uppercase tracking-wide">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
