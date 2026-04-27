'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code, CheckCircle, Lightbulb, Zap, Lock, X } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

interface ProjectDetailProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { id } = use(params);
  const project = projectsData.find((p) => p.id === id);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showLiveModal, setShowLiveModal] = useState(false);
  const [showWorkingModal, setShowWorkingModal] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-purple-400 hover:text-purple-300">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-40">
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur-md rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {/* Hero Section */}
      <section 
        className="relative py-16 px-4 sm:px-6 lg:px-8"
        style={id === 'gangavalley' ? {
          backgroundImage: 'url(/image copy 4.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
      >
        {id === 'gangavalley' && (
          <div className="absolute inset-0 bg-black/70" />
        )}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {project.shortDescription}
            </p>

            {/* Platform Showcase - 7 Client Architecture */}
            {id === 'apna-duggu' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 max-w-7xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-white text-center mb-8">Complete Ecosystem (7 Applications)</h3>
                
                {/* First Row - Web Apps (4 items) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {/* 1 - User Web App */}
                  <div className="group">
                    <div className="relative bg-gray-800 rounded-t-lg p-2 pb-0">
                      <div className="bg-gray-900 rounded-t-md border-4 border-gray-700 border-b-0 overflow-hidden">
                        <div className="h-[180px] relative overflow-hidden">
                          <Image src="/image copy.png" alt="User Web App" fill sizes="180px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      </div>
                      <div className="flex justify-center"><div className="w-16 h-3 bg-gray-700 rounded-b-md"></div></div>
                      <div className="flex justify-center pb-2"><div className="w-8 h-2 bg-gray-600 rounded-full"></div></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-cyan-400 text-xs font-bold">01</span>
                      <p className="text-white text-sm font-semibold">User Web App</p>
                      <p className="text-gray-500 text-xs">Customer Portal</p>
                    </div>
                  </div>

                  {/* 2 - Partner Web App */}
                  <div className="group">
                    <div className="relative bg-gray-800 rounded-t-lg p-2 pb-0">
                      <div className="bg-gray-900 rounded-t-md border-4 border-gray-700 border-b-0 overflow-hidden">
                        <div className="h-[180px] relative overflow-hidden">
                          <Image src="/image.png" alt="Partner Web App" fill sizes="180px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      </div>
                      <div className="flex justify-center"><div className="w-16 h-3 bg-gray-700 rounded-b-md"></div></div>
                      <div className="flex justify-center pb-2"><div className="w-8 h-2 bg-gray-600 rounded-full"></div></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-orange-400 text-xs font-bold">02</span>
                      <p className="text-white text-sm font-semibold">Partner Web App</p>
                      <p className="text-gray-500 text-xs">Provider Dashboard</p>
                    </div>
                  </div>

                  {/* 3 - User Landing Page */}
                  <div className="group">
                    <div className="relative bg-gray-800 rounded-t-lg p-2 pb-0">
                      <div className="bg-gray-900 rounded-t-md border-4 border-gray-700 border-b-0 overflow-hidden">
                        <div className="h-[180px] relative overflow-hidden">
                          <Image src="/image copy.png" alt="User Landing" fill sizes="180px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      </div>
                      <div className="flex justify-center"><div className="w-16 h-3 bg-gray-700 rounded-b-md"></div></div>
                      <div className="flex justify-center pb-2"><div className="w-8 h-2 bg-gray-600 rounded-full"></div></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-blue-400 text-xs font-bold">03</span>
                      <p className="text-white text-sm font-semibold">User Landing Page</p>
                      <p className="text-gray-500 text-xs">Marketing Site</p>
                    </div>
                  </div>

                  {/* 4 - Partner Landing Page */}
                  <div className="group">
                    <div className="relative bg-gray-800 rounded-t-lg p-2 pb-0">
                      <div className="bg-gray-900 rounded-t-md border-4 border-gray-700 border-b-0 overflow-hidden">
                        <div className="h-[180px] relative overflow-hidden">
                          <Image src="/image.png" alt="Partner Landing" fill sizes="180px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      </div>
                      <div className="flex justify-center"><div className="w-16 h-3 bg-gray-700 rounded-b-md"></div></div>
                      <div className="flex justify-center pb-2"><div className="w-8 h-2 bg-gray-600 rounded-full"></div></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-pink-400 text-xs font-bold">04</span>
                      <p className="text-white text-sm font-semibold">Partner Landing</p>
                      <p className="text-gray-500 text-xs">Provider Onboarding</p>
                    </div>
                  </div>
                </div>

                {/* Second Row - Mobile Apps + Admin (4 items, Admin spans 2) */}
                <div className="grid grid-cols-4 gap-6">
                  {/* 5 - User Mobile App */}
                  <div className="group">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="bg-gray-800 rounded-[2rem] p-2 shadow-2xl">
                          <div className="bg-gray-900 rounded-[1.5rem] overflow-hidden border-2 border-gray-700" style={{ width: '100px', height: '180px' }}>
                            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-800 rounded-full z-10"></div>
                            <div className="w-full h-full overflow-hidden relative">
                              <Image src="/image copy 2.png" alt="User Mobile" fill sizes="100px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-green-400 text-xs font-bold">05</span>
                      <p className="text-white text-sm font-semibold">User Mobile</p>
                      <p className="text-gray-500 text-xs">Flutter App</p>
                    </div>
                  </div>

                  {/* 6 - Partner Mobile App */}
                  <div className="group">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="bg-gray-800 rounded-[2rem] p-2 shadow-2xl">
                          <div className="bg-gray-900 rounded-[1.5rem] overflow-hidden border-2 border-gray-700" style={{ width: '100px', height: '180px' }}>
                            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-800 rounded-full z-10"></div>
                            <div className="w-full h-full overflow-hidden relative">
                              <Image src="/image copy.png" alt="Partner Mobile" fill sizes="100px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-purple-400 text-xs font-bold">06</span>
                      <p className="text-white text-sm font-semibold">Partner Mobile</p>
                      <p className="text-gray-500 text-xs">Provider App</p>
                    </div>
                  </div>

                  {/* 7 - Admin Panel (spans 2 columns) */}
                  <div className="group col-span-2">
                    <div className="relative bg-gray-800 rounded-t-lg p-2 pb-0">
                      <div className="bg-gray-900 rounded-t-md border-4 border-red-700 border-b-0 overflow-hidden">
                        <div className="h-[180px] relative overflow-hidden">
                          <Image src="/image copy 2.png" alt="Admin Panel" fill sizes="180px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      </div>
                      <div className="flex justify-center"><div className="w-16 h-3 bg-gray-700 rounded-b-md"></div></div>
                      <div className="flex justify-center pb-2"><div className="w-8 h-2 bg-gray-600 rounded-full"></div></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-red-400 text-xs font-bold">07</span>
                      <p className="text-white text-sm font-semibold">Admin Panel</p>
                      <p className="text-gray-500 text-xs">Management System</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Bharat Business Pro - Dual Panel System Showcase */}
            {id === 'bharat-business-pro' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 max-w-6xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-white text-center mb-8">Dual-Panel System Architecture</h3>
                
                {/* System Overview */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    { title: 'Landing Page', tech: 'Next.js 15 + 3D', color: 'cyan', icon: '🌐' },
                    { title: 'Backend API', tech: 'Express + Socket.io', color: 'orange', icon: '⚙️' },
                    { title: 'Admin Panel', tech: 'React + Recharts', color: 'red', icon: '👨‍💼' },
                    { title: 'User Dashboard', tech: 'React + Zustand', color: 'purple', icon: '👤' }
                  ].map((item) => (
                    <div key={item.title} className={`bg-gray-800 rounded-lg p-4 border border-${item.color}-500/30 text-center`}>
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className={`text-${item.color}-400 font-semibold text-sm`}>{item.title}</div>
                      <div className="text-gray-500 text-xs mt-1">{item.tech}</div>
                    </div>
                  ))}
                </div>

                {/* Dual Panel Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Admin Panel */}
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-red-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-red-400 text-lg">👨‍💼</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Admin Panel</h4>
                        <p className="text-gray-500 text-xs">Management & Moderation</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>User management with role-based access (Super Admin, Admin, User)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>Business moderation and verification workflow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>Lead management with add, edit, assign features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>Subscription management with Razorpay integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>Coupon and discount code management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>Bulk import system with progress tracking (CSV/Excel)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>Broadcast messaging to all users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>Business CRM with interaction tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5"></span>
                        <span>Real-time analytics dashboard with Recharts</span>
                      </li>
                    </ul>
                  </div>

                  {/* User Dashboard */}
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-400 text-lg">👤</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">User Dashboard</h4>
                        <p className="text-gray-500 text-xs">Business Management & Networking</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Business profile management with brand showcase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Product catalog with marketplace listing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Lead marketplace with purchase/unlock system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Real-time chat with other businesses (Socket.io)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Membership and subscription management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Feed system for business updates and announcements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Location-based business discovery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Notification center with FCM integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></span>
                        <span>Industry-based filtering and search</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Core Modules Grid */}
                <div className="mt-8">
                  <h4 className="text-white font-semibold text-center mb-4">Core System Modules</h4>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {[
                      { icon: '💬', label: 'Chat', color: 'cyan' },
                      { icon: '🎯', label: 'Leads', color: 'blue' },
                      { icon: '🛍️', label: 'Products', color: 'indigo' },
                      { icon: '📢', label: 'Broadcast', color: 'orange' },
                      { icon: '💳', label: 'Payments', color: 'green' },
                      { icon: '📊', label: 'Analytics', color: 'pink' }
                    ].map((module) => (
                      <div key={module.label} className={`bg-gray-800 rounded-lg p-3 text-center border border-${module.color}-500/20`}>
                        <div className="text-2xl mb-1">{module.icon}</div>
                        <div className={`text-${module.color}-400 text-xs font-medium`}>{module.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Flow */}
                <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs">
                  {['Landing (Next.js)', '→', 'API (Express)', '→', 'Admin (React)', '|', 'User Dashboard (React)', '←', 'WebSocket (Socket.io)'].map((item, i) => (
                    <span key={i} className={item === '→' || item === '|' || item === '←' ? 'text-gray-600' : 'text-gray-400 bg-gray-800 px-2 py-1 rounded'}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* E-Ethekedaar - Construction Project Workflow Showcase */}
            {id === 'e-thekedaar' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 max-w-6xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-white text-center mb-8">Construction Project Lifecycle</h3>
                
                {/* Workflow Steps */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { step: '01', title: 'Tender', desc: 'Project creation & tender allocation', color: 'cyan' },
                    { step: '02', title: 'Planning', desc: 'Milestones & resource allocation', color: 'blue' },
                    { step: '03', title: 'Execution', desc: 'Progress tracking & monitoring', color: 'orange' },
                    { step: '04', title: 'Completion', desc: 'Final inspection & handover', color: 'green' }
                  ].map((item) => (
                    <div key={item.step} className={`bg-gray-800 rounded-lg p-4 border border-${item.color}-500/30 hover:border-${item.color}-500/60 transition-all`}>
                      <div className={`text-${item.color}-400 text-lg font-bold mb-2`}>{item.step}</div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>

                {/* User Roles Section */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Government Projects */}
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-yellow-400 text-lg">🏛️</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Government Projects</h4>
                        <p className="text-gray-500 text-xs">Public sector compliance & tracking</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        Tender document management
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        E-tendering integration
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        Compliance documentation (PWD, CPWD standards)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        Bill of Quantities (BOQ) tracking
                      </li>
                    </ul>
                  </div>

                  {/* Private Projects */}
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-400 text-lg">🏢</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Private Projects</h4>
                        <p className="text-gray-500 text-xs">Residential & commercial construction</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        Client portal with progress updates
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        Budget tracking & cost control
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        Material inventory management
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        Contractor payment scheduling
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Core Modules */}
                <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-3">
                  {[
                    { icon: '📊', label: 'Dashboard', color: 'cyan' },
                    { icon: '👷', label: 'Contractors', color: 'blue' },
                    { icon: '📅', label: 'Milestones', color: 'indigo' },
                    { icon: '📦', label: 'Materials', color: 'orange' },
                    { icon: '💰', label: 'Finance', color: 'green' },
                    { icon: '📋', label: 'Reports', color: 'pink' }
                  ].map((module) => (
                    <div key={module.label} className={`bg-gray-800 rounded-lg p-3 text-center border border-${module.color}-500/20`}>
                      <div className="text-2xl mb-1">{module.icon}</div>
                      <div className={`text-${module.color}-400 text-xs font-medium`}>{module.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={() => {
                  if (id === 'apna-duggu') {
                    setShowLiveModal(true);
                  } else if (id === 'e-thekedaar') {
                    setShowWorkingModal(true);
                  } else if (id === 'fly-crm' || id === 'bharat-business-pro') {
                    setShowCodeModal(true);
                  } else {
                    window.open(project.liveUrl, '_blank');
                  }
                }}
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </button>
              <button
                onClick={() => setShowCodeModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <Code size={18} />
                View Code
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">About the Project</h2>
                <p className="text-gray-400 leading-relaxed">{project.fullDescription}</p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={24} />
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                    >
                      <CheckCircle className="text-green-400 mt-0.5 shrink-0" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>

          {/* Challenges & Learnings - Full Width */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="text-yellow-400" size={24} />
                Challenges Faced
              </h2>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                  >
                    <span className="text-gray-300">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Lightbulb className="text-blue-400" size={24} />
                Key Learnings
              </h2>
              <div className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                  >
                    <Lightbulb className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span className="text-gray-300">{learning}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Live Demo Modal - Apna Duggu Links */}
      <AnimatePresence>
        {showLiveModal && id === 'apna-duggu' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowLiveModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="bg-gray-900 border border-purple-500/30 rounded-2xl p-8 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <ExternalLink className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Apna Duggu Live Apps</h3>
              </div>
              <button
                onClick={() => setShowLiveModal(false)}
                className="p-1 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="text-gray-400" size={20} />
              </button>
            </div>
            
            <p className="text-gray-400 mb-6">
              Access the complete ecosystem. Choose a platform:
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {/* User Web App */}
              <a
                href="https://apnaduggu.com/user"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <ExternalLink className="text-cyan-400" size={16} />
                  </div>
                  <span className="font-semibold text-white">User App</span>
                </div>
                <p className="text-xs text-gray-500">apnaduggu.com/user</p>
              </a>

              {/* Partner Web App */}
              <a
                href="https://apnaduggu.com/partner"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <ExternalLink className="text-orange-400" size={16} />
                  </div>
                  <span className="font-semibold text-white">Partner App</span>
                </div>
                <p className="text-xs text-gray-500">apnaduggu.com/partner</p>
              </a>

              {/* User Landing Page */}
              <a
                href="https://apnaduggu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <ExternalLink className="text-blue-400" size={16} />
                  </div>
                  <span className="font-semibold text-white">User Landing</span>
                </div>
                <p className="text-xs text-gray-500">apnaduggu.com</p>
              </a>

              {/* Partner Landing Page */}
              <a
                href="https://partner.apnaduggu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <ExternalLink className="text-pink-400" size={16} />
                  </div>
                  <span className="font-semibold text-white">Partner Landing</span>
                </div>
                <p className="text-xs text-gray-500">partner.apnaduggu.com</p>
              </a>
            </div>
            
            <button
              onClick={() => setShowLiveModal(false)}
              className="w-full mt-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Code Confidentiality Modal */}
      <AnimatePresence>
        {showCodeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCodeModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="bg-gray-900 border border-red-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-500/20 rounded-full">
                  <Lock className="text-red-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Confidential Code</h3>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="p-1 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="text-gray-400" size={20} />
              </button>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              The source code for this project is <span className="text-red-400 font-semibold">confidential</span> and cannot be shared publicly due to security and proprietary restrictions.
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-6">
              <p className="text-sm text-gray-500">
                For code access inquiries, please contact directly for discussion under appropriate agreements.
              </p>
            </div>
            
            <button
              onClick={() => setShowCodeModal(false)}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold"
            >
              Understood
            </button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Working Currently Modal - E-Ethekedaar */}
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
            className="bg-gray-900 border border-orange-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <Zap className="text-orange-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Working Currently</h3>
              </div>
              <button
                onClick={() => setShowWorkingModal(false)}
                className="p-1 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="text-gray-400" size={20} />
              </button>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              This project is <span className="text-orange-400 font-semibold">currently under development</span>. The live demo will be available soon.
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-6">
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
    </div>
  );
}
