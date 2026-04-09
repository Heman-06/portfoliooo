'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'FLY YOURTECH',
    location: 'Remote',
    period: 'October 2025 - Present',
    description: 'Developing high-quality web and mobile applications, ensuring consistency and performance across platforms. Building responsive front-end interfaces and robust backend services using modern frameworks and development standards.',
    achievements: [
      'Developing high-quality web and mobile applications',
      'Implementing reusable components and modular architecture',
      'Integrating APIs, third-party services, and databases',
      'Collaborating with cross-functional teams on full-stack applications',
      'Conducting debugging, performance optimization, and code reviews'
    ],
    skills: ['React', 'Next.js', 'Node.js', 'Flutter', 'Firebase', 'PostgreSQL']
  },
  {
    role: 'Software Developer Intern',
    company: 'FLY YOURTECH',
    location: 'Remote',
    period: 'April 2025 - October 2025',
    description: 'Assisted in developing web and mobile applications while ensuring good performance across platforms. Contributed to building responsive front-end interfaces and supporting backend functionalities.',
    achievements: [
      'Assisted in developing web and mobile applications',
      'Helped implement reusable components and modular structures',
      'Worked on integrating APIs, third-party services, and databases',
      'Collaborated with team during planning and deployment stages',
      'Performed debugging and code improvements'
    ],
    skills: ['React', 'JavaScript', 'Flutter', 'Node.js', 'Git']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Work <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-white md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:border-gray-400 hover:bg-gray-200 transition-all duration-300 group">
                    {/* Header */}
                    <div className={`flex flex-col gap-2 mb-4 ${
                      index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                    }`}>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-bold text-black group-hover:text-gray-600 transition-colors">
                        {exp.role}
                      </h3>
                      <div className={`flex items-center gap-4 text-gray-600 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-left">{exp.description}</p>

                    {/* Achievements */}
                    <ul className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? 'md:text-right' : 'text-left'
                    }`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <ArrowUpRight size={14} className="text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-left">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
