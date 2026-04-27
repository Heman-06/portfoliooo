'use client';

import { motion } from 'framer-motion';
import { Tree, Folder, File } from '@/components/ui/file-tree';

export default function Qualification() {
  return (
    <section id="qualification" className="w-full bg-white text-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">
                Qualifications
              </span>
            </h2>
          </motion.div>

          {/* File Tree Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex max-w-2xl mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white p-4"
          >
            <Tree
              className="w-full bg-white overflow-hidden rounded-md"
              initialExpandedItems={["Education", "BTECH", "Diploma", "Intermediate", "HighSchool", "Certifications"]}
            >
              <Folder element="My Education" value="Education">
                <Folder element="Vision Institute of Technology" value="BTECH">
                  <File value="BTECH-CSE">
                    <p>Bachelor of Technology - Computer Science and Engineering (2022 – 2025)</p>
                    <p className="text-gray-500 text-sm">CGPA: 7.94</p>
                  </File>
                </Folder>
                <Folder element="Government Polytechnic Kanpur" value="Diploma">
                  <File value="Diploma-IT">
                    <p>Diploma - Information Technology (2019 – 2022)</p>
                    <p className="text-gray-500 text-sm">Percentage: 80.52%</p>
                  </File>
                </Folder>
                <Folder element="Saraswati Vidya Mandir" value="Intermediate">
                  <File value="Intermediate-Science">
                    <p>Intermediate - Science (2016 – 2018)</p>
                    <p className="text-gray-500 text-sm">Percentage: 81.4%</p>
                  </File>
                </Folder>
                <Folder element="Saraswati Vidya Mandir" value="HighSchool">
                  <File value="HighSchool-General">
                    <p>High School (2014 – 2016)</p>
                    <p className="text-gray-500 text-sm">Percentage: 86.16%</p>
                  </File>
                </Folder>
              </Folder>
              <Folder element="My Certifications" value="Certifications">
                <Folder element="LinkedIn" value="LinkedIn">
                  <File value="LinkedIn-FullStack">
                    <p>Become a Full-Stack Web Developer (2024)</p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
