import { motion } from 'framer-motion';

import { github, robot, frenchai, aoc, enterprise } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const projectDefinitions = [
  {
    name: "AI French Teacher",
    description:
      "Harnesses ChatGPT, ElevenLabs and the News API to generate and read aloud a French lesson based on the day's French sports news.",
    tags: ["Python", "ChatGPT", "ElevenLabs"],
    image: frenchai,
    source_code_link: "https://github.com/BenWorsley-19/FrenchRevisionAI",
  },
  {
    name: "Advent of Code",
    description:
      "Solutions to all 50 Advent of Code challenges, written in Go — an excuse to learn Go and sharpen my problem solving.",
    tags: ["Go"],
    image: aoc,
    source_code_link: "https://github.com/BenWorsley-19/AdventOfCode2023/tree/main",
  },
  {
    name: "Music Enterprise",
    description:
      "A worked example of object-oriented design, built to help colleagues who were new to coding.",
    tags: ["Java"],
    image: enterprise,
    source_code_link: "https://github.com/BenWorsley-19/music-enterprise",
  },
  {
    name: "3D Space Visual",
    description:
      "The result of experimenting with Three.js and building 3D graphics in Blender.",
    tags: ["React", "Three.js", "TailwindCSS", "Blender"],
    image: robot,
    source_code_link: "https://github.com/BenWorsley-19/ThreeDRobot",
  },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)} className="w-full">
      <div className="group surface surface-hover flex h-full flex-col overflow-hidden rounded-3xl">
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            aria-label={`Open ${name} on GitHub`}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink-900/70 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/30"
          >
            <img src={github} alt="GitHub" className="h-5 w-5 object-contain invert" />
          </button>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold text-neutral-50 transition-colors duration-300 group-hover:text-accent-soft">
            {name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[0.7rem] text-neutral-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="relative w-full py-16 lg:py-24">
      <motion.div variants={textVariant()} className="mb-14 max-w-2xl">
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="text-accent-soft">03</span>
          <span className="h-px w-10 bg-white/15" />
          More Work
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
          Short Projects
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-400">
          Side projects built to learn a new technology — or just for the fun of it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {projectDefinitions.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
