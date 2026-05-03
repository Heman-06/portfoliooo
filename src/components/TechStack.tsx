'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';

// Tech SVG Icons
const NextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#61DAFB">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#02569B">
    <path d="M12.947 2.608l7.48 7.48-4.258 4.258-3.222-3.222-6.603 6.603-4.258-4.258 10.86-10.86zm-1.12 12.596l3.222 3.222-7.48 7.48H4.259l7.568-10.702z"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#339933">
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5L18.5 8 12 11.5 5.5 8 12 4.5zM5 9.5l6 3.5v6.5L5 16v-6.5zm14 0v6.5l-6 3.5v-6.5l6-3.5z"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFCA28">
    <path d="M7 3l-4 8h4l-2 10 12-14h-6l4-8H7z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#06B6D4">
    <path d="M12 6c-1.66 0-2.7.33-3.4 1-.7.67-1 1.56-1 2.68 0 1.12.33 1.67 1 2.01.67.34 1.74.51 3.4.51h1.6c1.66 0 2.7.33 3.4 1 .7.67 1 1.56 1 2.68 0 1.12-.33 1.67-1 2.01-.67.34-1.74.51-3.4.51H9.6c-1.66 0-2.7-.33-3.4-1-.7-.67-1-1.56-1-2.68 0-1.12.33-1.67 1-2.01.67-.34 1.74-.51 3.4-.51h1.6c1.66 0 2.7-.33 3.4-1 .7-.67 1-1.56 1-2.68 0-1.12-.33-1.67-1-2.01-.67-.34-1.74-.51-3.4-.51z"/>
  </svg>
);

const BootstrapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#7952B3">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2V7h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-2v2zm2-6h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1z"/>
  </svg>
);

const ViteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#646CFF">
    <path d="M12 2L2 19h20L12 2zm0 3l7 12H5l7-12z"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zm-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185zm20.744 1.3c-.66-1.47-2.09-2.47-3.54-2.47-.65 0-1.27.16-1.85.47-.48-1.14-1.43-2.03-2.62-2.42-.08-.03-.17-.03-.26-.03H2.1c-.3 0-.54.24-.54.54v9.44c0 .3.24.54.54.54h15.8c.17 0 .33-.08.43-.22 1.26-1.9 1.54-4.12.8-6.09-.06-.17-.22-.27-.4-.27h-.03z"/>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
    <path d="M24 18.588a1.529 1.529 0 01-1.895-.43l-2.054-2.765-2.076 2.794a1.488 1.488 0 01-1.985.435l-2.036-1.697 3.169-3.749 3.065 3.865 3.201-4.296 2.251 1.725V18.588zM2.5 16.393l3.168-3.749 3.065 3.865 3.202-4.296 2.251 1.725V18.588a1.529 1.529 0 01-1.895-.43l-2.054-2.765-2.076 2.794a1.488 1.488 0 01-1.985.435L2.5 16.393z"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F05032">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.651 2.652c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.678-1.342-.396-2.009L7.611 3.36 1.119 9.849c-.603.605-.603 1.585 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.761-10.758c.605-.603.605-1.582 0-2.187"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.547 1.377.203 2.394.1 2.647.64.698 1.028 1.592 1.028 2.682 0 3.841-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF6C37">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97-.001c-.156 0-.236.188-.12.297l.496.47-4.742 4.748-1.09-1.092 4.744-4.748.417.443c.116.124.306.04.306-.117V7.578c0-.323-.263-.586-.586-.586H9.418c-.323 0-.586.263-.586.586v4.84c0 .323.263.586.586.586h.387c.157 0 .241-.19.12-.297l-.473-.445 1.09-1.092.001 1.373-2.386 2.386c-.097.097-.097.255 0 .353l2.763 2.762c.097.097.255.097.353 0l4.748-4.748.467.494c.11.116.298.036.298-.12l-.001-1.971c0-.323-.263-.586-.586-.586z"/>
  </svg>
);

const JWTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#000000">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
  </svg>
);

const RestApiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
    <path d="M4 2v20h16V2H4zm14 18H6V4h12v16zM8 6h2v2H8V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6zM8 10h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM8 14h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#47A248">
    <path d="M12 2c1.5 3 2 6 2 9s-.5 6-2 9c-1.5-3-2-6-2-9s.5-6 2-9z"/>
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#336791">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const FirestoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFCA28">
    <path d="M12 2l-8 4v12l8 4 8-4V6l-8-4zm0 2.5L17.5 8 12 11.5 6.5 8 12 4.5z"/>
  </svg>
);

const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#7AB55C">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const LiquidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3B5998">
    <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
  </svg>
);

const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E34F26">
    <path d="M12 2L2 7l1 12 9 3 9-3 1-12-10-5zm0 2.5l6.5 3-6.5 3-6.5-3 6.5-3z"/>
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1572B6">
    <path d="M12 2L2 7l1 12 9 3 9-3 1-12-10-5zm0 2.5l6.5 3-6.5 3-6.5-3 6.5-3z"/>
  </svg>
);

const DartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00B4AB">
    <path d="M12 2L4 6l8 4 8-4-8-4zm0 6L4 12l8 4 8-4-8-4zm0 6l-8 4 8 4 8-4-8-4z"/>
  </svg>
);

// Skill item with icon
interface SkillItem {
  name: string;
  icon: React.FC;
  color: string;
}

const SkillIcon = ({ skill }: { skill: SkillItem | { name: string; icon: React.FC; color: string } }) => {
  const Icon = skill.icon;
  return (
    <div className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-gray-100 rounded-full border border-gray-300 hover:border-${skill.color}-500/50 transition-all duration-300 group`}>
      <Icon />
      <span className="text-gray-800 text-xs sm:text-sm font-medium whitespace-nowrap group-hover:text-black">{skill.name}</span>
    </div>
  );
};

// All skills - Row 1: Next.js + MERN Stack + Key Frontend
const skillsRow1 = [
  { name: 'Next.js', icon: NextIcon as React.FC, color: 'white' },
  { name: 'React.js', icon: ReactIcon as React.FC, color: 'cyan' },
  { name: 'Node.js', icon: NodeIcon as React.FC, color: 'green' },
  { name: 'MongoDB', icon: MongoIcon as React.FC, color: 'green' },
  { name: 'Firebase', icon: FirebaseIcon as React.FC, color: 'yellow' },
  { name: 'Tailwind CSS', icon: TailwindIcon as React.FC, color: 'cyan' },
  { name: 'Flutter', icon: FlutterIcon as React.FC, color: 'blue' },
  { name: 'Dart', icon: DartIcon as React.FC, color: 'cyan' },
];

// Row 2: Other technologies
const skillsRow2 = [
  { name: 'Express.js', icon: ExpressIcon as React.FC, color: 'white' },
  { name: 'Git', icon: GitIcon as React.FC, color: 'orange' },
  { name: 'GitHub', icon: GitHubIcon as React.FC, color: 'white' },
  { name: 'Postman', icon: PostmanIcon as React.FC, color: 'orange' },
  { name: 'JWT', icon: JWTIcon as React.FC, color: 'pink' },
  { name: 'REST APIs', icon: RestApiIcon as React.FC, color: 'green' },
  { name: 'Docker', icon: DockerIcon as React.FC, color: 'blue' },
  { name: 'PostgreSQL', icon: PostgresIcon as React.FC, color: 'blue' },
];

// Velocity scroll component
function useElementWidth(ref: React.RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

function VelocityRow({
  children,
  baseVelocity = 100,
  numCopies = 6,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  numCopies?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    { clamp: false }
  );

  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return '0px';
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const spans = [];
  for (let i = 0; i < numCopies; i++) {
    spans.push(
      <div className="flex-shrink-0 flex items-center gap-2 sm:gap-4" key={i} ref={i === 0 ? copyRef : null}>
        {children}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {spans}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="techstack" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white text-black overflow-hidden">
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
            Tech <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to build modern, scalable applications
          </p>
        </motion.div>

        {/* 2-Row Carousel with Blur Effects */}
        <div className="relative max-w-6xl mx-auto flex flex-col gap-2 sm:gap-4">
          {/* Left Blur */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20 z-10"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 60%, rgba(255, 255, 255, 0))',
              filter: 'blur(4px)',
            }}
          />
          {/* Right Blur */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20 z-10"
            style={{
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.9) 60%, rgba(255, 255, 255, 0))',
              filter: 'blur(4px)',
            }}
          />

          {/* Row 1 - Left to Right */}
          <VelocityRow baseVelocity={-5} numCopies={6}>
            {skillsRow1.map((skill, index) => (
              <SkillIcon key={index} skill={skill} />
            ))}
          </VelocityRow>

          {/* Row 2 - Right to Left */}
          <VelocityRow baseVelocity={5} numCopies={6}>
            {skillsRow2.map((skill, index) => (
              <SkillIcon key={index} skill={skill} />
            ))}
          </VelocityRow>
        </div>
      </div>
    </section>
  );
}
