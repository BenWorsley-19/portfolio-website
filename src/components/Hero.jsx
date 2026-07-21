import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";

import { memoji } from '../assets';

const badges = [
  { icon: "🦄", label: "2nd engineer at a UK unicorn" },
  { icon: "🚀", label: "0 → 1 product builder" },
  { icon: "🌟", label: "Team builder & mentor" },
];

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col justify-center pt-28 pb-16 lg:pt-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:col-span-7 lg:text-left"
        >
          <p className="eyebrow mb-6">Portfolio — Side Projects</p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <span className="text-neutral-500">Hey, I&apos;m Ben.</span>
            <br />
            <span className="text-gradient animate-gradient-x block min-h-[6.5rem] sm:min-h-[8rem] lg:min-h-[9.5rem] xl:min-h-[11.75rem]">
              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  1600,
                  "Agent Architect",
                  1600,
                  "Tech Lead",
                  1600,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                cursor
              />
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-neutral-400 lg:mx-0">
            I build AI-powered products end to end. Here are a few projects
            I&apos;ve shipped outside of my day job.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#techassessai"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-soft hover:shadow-glow"
            >
              View my work
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href="https://github.com/BenWorsley-19"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-neutral-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/benworsley/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-neutral-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            {badges.map((b) => (
              <span
                key={b.label}
                className="surface surface-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-neutral-300"
              >
                <span aria-hidden="true">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:col-span-5"
        >
          <div className="relative animate-float">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-accent-violet to-accent-cyan opacity-30 blur-3xl" />
            <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent lg:h-[380px] lg:w-[380px]">
              <div className="absolute inset-4 rounded-full border border-white/5" />
              <img
                src={memoji}
                alt="Ben Worsley"
                className="relative h-[220px] w-[220px] object-contain drop-shadow-2xl lg:h-[280px] lg:w-[280px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
