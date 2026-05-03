'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Download, Mail } from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Frontend Development', desc: 'React.js, Next.js, Redux, Tailwind CSS' },
  { icon: Smartphone, name: 'Mobile Development', desc: 'Flutter, React Native' },
  { icon: Globe, name: 'Backend Development', desc: 'Node.js, Express.js, REST APIs' },
];

const stats = [
  { number: '1+', label: 'Years Experience' },
  { number: '10+', label: 'Projects Completed' },
  { number: '15+', label: 'Technologies Mastered' },
  { number: '10+', label: 'Successful Deployments' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            About <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">Me</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gray-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-gray-100 rounded-2xl p-8 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Avatar */}
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl">
                    <img 
                      src="/image.png" 
                      alt="Hemant Asthana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-black mb-2">Hemant Asthana</h3>
                    <p className="text-gray-600">Full Stack Developer</p>
                    <div className="flex gap-3 mt-4 justify-center md:justify-start">
                      <a
                        href="mailto:your.email@example.com"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg transition-all duration-300 text-sm"
                      >
                        <Mail size={16} />
                        Contact Me
                      </a>
                      <a
                        href="/resume.pdf"
                        className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-300 text-sm"
                      >
                        <Download size={16} />
                        Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:border-gray-400 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Who am I?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                I&apos;m a Software Engineer at FLY YOURTECH, specializing in building high-quality web and mobile applications. With expertise in React.js, Next.js, Flutter, and Node.js, I develop scalable solutions across platforms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I hold a B.Tech in Computer Science from Vision Institute of Technology (CGPA: 7.94) and a Diploma in IT from Government Polytechnic Kanpur. My technical journey includes mastering JavaScript, Java, Dart, and various modern frameworks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to projects, or building innovative digital solutions that make a difference.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-gray-400 hover:bg-gray-200 transition-all duration-300 group"
                >
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 mb-2 sm:mb-3 group-hover:text-black transition-colors" />
                  <h4 className="text-black font-semibold mb-1 text-sm sm:text-base">{skill.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Let&apos;s Talk
            <span className="animate-bounce">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
