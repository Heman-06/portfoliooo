'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, ArrowUpRight, Eye, Lock, X, Users, Gift, Zap } from 'lucide-react';

const projects = [
  {
    id: 'bharat-business-pro',
    title: 'Bharat Business Pro – Business Networking Platform',
    description: 'Full-stack business networking platform with Next.js landing page, Express.js backend, and React dashboard. Features real-time chat, lead management, Razorpay subscriptions, admin panel, and business verification system.',
    image: 'https://bharatbusinessnetworks.com/frontend/img/sticky-logo.png',
    tags: ['Next.js', 'Express.js', 'TypeScript', 'Firebase', 'Redis', 'Socket.io', 'Razorpay'],
    liveUrl: 'https://bharatbusinessnetworks.com',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'apna-duggu',
    title: 'Apna Duggu – Multi-Platform Service Ecosystem',
    description: 'Service marketplace with 2 Flutter mobile apps (Customer & Partner) that also run on web. Includes separate landing pages for users and service providers, real-time chat, job tracking, subscription model, and push notifications.',
    image: '/image copy.png',
    tags: ['Next.js', 'Flutter', 'Node.js', 'PostgreSQL', 'Firebase', 'Web + Mobile'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'e-thekedaar',
    title: 'E-Ethekedaar – Construction Management App',
    description: 'Cross-platform Flutter mobile app with monorepo backend for construction project management. Features real-time project tracking, contractor coordination, milestone management, on-site photo documentation with geotagging, offline capability for remote sites, and automatic sync. Supports government and private projects with role-based access.',
    image: 'https://e-thekedaar-assets.s3.ap-south-1.amazonaws.com/e-Thekedaar-01.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'REST API', 'Monorepo', 'Mobile App'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'corefit-plus',
    title: 'Corefit Plus – Fitness & Wellness Platform',
    description: 'Developed responsive frontend UI for a static fitness and wellness platform. Built landing pages for class booking info, membership details with cross-device compatibility and performance optimization.',
    image: '/image copy 3.png',
    tags: ['React.js', 'Bootstrap', 'Font Awesome', 'Frontend'],
    liveUrl: 'https://corefitplus.com',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'fly-crm',
    title: 'FLY YOURTECH CRM',
    description: 'Internal CRM system with lead management, client tracking, task assignment, and real-time dashboard analytics.',
    image: '/image copy 2.png',
    tags: ['React', 'Firebase', 'Firestore', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'gangavalley',
    title: 'Gangavalley Real Estate',
    description: 'Responsive real estate landing page built with Next.js and Tailwind CSS. Features property highlights, amenities, location map, and contact forms. SEO optimized.',
    image: '/image copy 4.png',
    tags: ['Next.js', 'Tailwind CSS', 'React'],
    liveUrl: 'https://ayayventures.com/gangavalley',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'mgneq',
    title: 'MGNEQ – E-commerce Website',
    description: 'Developed and customized a Shopify-based e-commerce website with Liquid templating, custom product pages, and responsive design.',
    image: '/image copy 5.png',
    tags: ['Shopify', 'Liquid', 'HTML', 'CSS'],
    liveUrl: 'https://magneq.in',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'mysweetwishes',
    title: 'MySweetWishes – Gift & E-commerce Store',
    description: 'Developed a Shopify-based gifting e-commerce website with customized themes, product pages, and responsive storefront design.',
    image: '/image.png',
    tags: ['Shopify', 'Liquid', 'HTML', 'CSS'],
    liveUrl: 'https://mysweetwishes.com/',
    githubUrl: '#',
    featured: false
  }
];

export default function Projects() {
  const [showConfModal, setShowConfModal] = useState(false);
  const [showWorkingModal, setShowWorkingModal] = useState(false);

  return (
    <section id="projects" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
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
            My <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-black rounded-full" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gray-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="h-64 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-fill group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={`/project/${project.id}`}
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Eye size={16} />
                        View Details
                      </a>
                      <div className="flex items-center gap-3">
                        {project.id === 'e-thekedaar' ? (
                          <button
                            onClick={() => setShowWorkingModal(true)}
                            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors font-medium"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </button>
                        ) : (
                          <a
                            href={project.liveUrl}
                            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors font-medium"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                        <span className="text-gray-300">|</span>
                        <button
                          onClick={() => setShowConfModal(true)}
                          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors font-medium"
                        >
                          <Code size={16} />
                          Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full" />
            Other Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center relative">
                    {project.id === 'fly-crm' ? (
                      <Users className="text-gray-600" size={24} />
                    ) : project.id === 'mysweetwishes' ? (
                      <Gift className="text-gray-600" size={24} />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.id === 'fly-crm' ? '#' : `/project/${project.id}`}
                      onClick={(e) => {
                        if (project.id === 'fly-crm') {
                          e.preventDefault();
                          setShowConfModal(true);
                        }
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-md hover:bg-gray-700 transition-colors"
                    >
                      <Eye size={14} />
                      View
                    </a>
                    <button
                      onClick={() => setShowConfModal(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-gray-600 hover:text-black hover:bg-gray-200 rounded-md transition-colors text-xs font-medium"
                    >
                      <Code size={14} />
                      Code
                    </button>
                    {project.id === 'fly-crm' ? (
                      <button
                        onClick={() => setShowConfModal(true)}
                        className="flex items-center gap-1.5 p-1.5 text-gray-600 hover:text-black hover:bg-gray-200 rounded-md transition-colors"
                        title="Live Demo"
                      >
                        <ArrowUpRight size={16} />
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1.5 p-1.5 text-gray-600 hover:text-black hover:bg-gray-200 rounded-md transition-colors"
                        title="Live Demo"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Working Currently Modal */}
      <AnimatePresence>
        {showWorkingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowWorkingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="bg-white border border-orange-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-orange-500/20 rounded-full">
                    <Zap className="text-orange-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Working Currently</h3>
                </div>
                <button
                  onClick={() => setShowWorkingModal(false)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="text-gray-400" size={20} />
                </button>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                This project is <span className="text-orange-400 font-semibold">currently under development</span>. The live demo will be available soon.
              </p>
              
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200 mb-6">
                <p className="text-sm text-gray-500">
                  For updates and early access, please stay tuned for the official release.
                </p>
              </div>
              
              <button
                onClick={() => setShowWorkingModal(false)}
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-semibold"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confidentiality Modal */}
      <AnimatePresence>
        {showConfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowConfModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="bg-white border border-red-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-500/20 rounded-full">
                    <Lock className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-black">Private Project</h3>
                </div>
                <button
                  onClick={() => setShowConfModal(false)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="text-gray-600" size={20} />
                </button>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                This is a <span className="text-red-600 font-semibold">private/confidential</span> project. Details and code cannot be shared publicly.
              </p>
              
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200 mb-6">
                <p className="text-sm text-gray-600">
                  For inquiries, please contact directly for discussion under appropriate agreements.
                </p>
              </div>
              
              <button
                onClick={() => setShowConfModal(false)}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold"
              >
                Understood
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
