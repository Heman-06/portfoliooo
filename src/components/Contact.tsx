'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ExternalLink, User, MessageCircle, Camera } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hemantblp123@gmail.com',
    href: 'mailto:hemantblp123@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6388275885',
    href: 'tel:+916388275885'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kanpur, India',
    href: '#'
  }
];

const socialLinks = [
  { icon: ExternalLink, label: 'GitHub', href: '#', color: 'hover:text-gray-400' },
  { icon: User, label: 'LinkedIn', href: '#', color: 'hover:text-blue-500' },
  { icon: MessageCircle, label: 'Twitter', href: '#', color: 'hover:text-sky-500' },
  { icon: Camera, label: 'Instagram', href: '#', color: 'hover:text-pink-500' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
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
            Get In <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl border border-gray-200 hover:border-cyan-500/50 hover:bg-gray-200 transition-all duration-300 group"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <info.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{info.label}</p>
                    <p className="text-black font-medium group-hover:text-cyan-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

           
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gray-300 rounded-2xl blur opacity-25" />
              <form
                onSubmit={handleSubmit}
                className="relative bg-gray-100 rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-black mb-6">Send a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-gray-300 text-center"
        >
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Hemant Asthana. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
