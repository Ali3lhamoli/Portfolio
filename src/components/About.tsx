import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  const coursework = [
    "Data Structures",
    "Algorithms Analysis",
    "Database Management",
    "Software Engineering",
    "OOP",
    "Computer Architecture",
  ];

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Very Good" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#f9f9f9] dark:bg-black transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Committed to continuous self-development and passionate about
              creating robust backend solutions that drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                  <GraduationCap
                    className="text-cyan-600 dark:text-cyan-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-cyan-500/10 transition-all">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                        Bachelor of Communication and Computers Engineering
                      </h4>
                      <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                        Tanta Higher Institute of Engineering and Technology
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        Sep. 2019 – July 2024 • Tanta, Gharbia
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                          GPA: 2.44 (C+)
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Project 1: A+
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Project 2: A+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <BookOpen size={18} className="mr-2" />
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {coursework.map((course, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/15 dark:to-purple-900/15 text-cyan-800 dark:text-cyan-300 px-3 py-2 rounded-lg text-sm"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full flex items-center justify-center">
                  <Award
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    skill: "Communication",
                    description:
                      "Effective verbal and written communication skills",
                  },
                  {
                    skill: "Teamwork",
                    description:
                      "Proven ability to collaborate effectively in teams",
                  },
                  {
                    skill: "Problem-Solving",
                    description:
                      "Strong analytical skills for identifying and solving issues",
                  },
                  {
                    skill: "Time Management",
                    description:
                      "Ability to prioritize tasks and meet deadlines",
                  },
                  {
                    skill: "Adaptability",
                    description: "Flexible and open to new ideas and changes",
                  },
                  {
                    skill: "Leadership",
                    description:
                      "Demonstrated leadership skills in team settings",
                  },
                  {
                    skill: "Attention to Detail",
                    description:
                      "Meticulous in ensuring accuracy and thoroughness",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-lg hover:shadow-cyan-400/10 transition-all"
                  >
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.skill}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Language Skills
                </h4>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg"
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {lang.language}
                      </span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
