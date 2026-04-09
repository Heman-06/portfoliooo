import React, { Suspense, lazy } from 'react';
import { ArrowRight } from 'lucide-react';
import RotatingText from './RotatingText';

// Lazy load Spline to prevent blocking initial render
const Spline = lazy(() => import('@splinetool/react-spline'));

/**
 * A modern, minimal hero section component.
 */
export default function Hero() {
  const skills = ['Mobile App Development', 'Full Stack Web Developer', 'Shopify Expert', 'Creative Coder'];

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* 1. Spline Background */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-purple-900 via-black to-blue-900" />}>
          <Spline
            scene="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
            aria-label="Interactive 3D animation"
          />
        </Suspense>
      </div>

      {/* Navigation with Name */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center p-8 pointer-events-none">
        <div className="text-white text-2xl font-bold pointer-events-auto md:hidden">
          Hemant Asthana
        </div>
      </nav>

      {/* 2. Overlay Content */}
      {/* Content is aligned to the center */}
      <div className="relative z-20 flex items-center justify-center w-full h-full p-8 text-center bg-black/20 pointer-events-none sm:p-16 md:p-24">
        <div className="max-w-md pointer-events-auto">
          <h1 className="font-pixel text-5xl font-bold text-white md:text-7xl lg:text-8xl [text-shadow:_0_3px_5px_rgb(0_0_0_/_40%)] whitespace-nowrap">
            I'm Hemant
          </h1>
          
          <div className="flex justify-center mt-4">
            <RotatingText
              texts={skills}
              mainClassName="text-lg text-white/90 md:text-xl lg:text-2xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
          </div>
        
          {/* Call-to-action buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg pointer-events-auto hover:bg-gray-200 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1vuvWLNdXU6Mh2FTUlzscJUAOXo-Uc_D9/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white rounded-lg shadow-lg pointer-events-auto hover:bg-white hover:text-black hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
