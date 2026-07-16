import { motion } from 'framer-motion';

import { robot, frenchai, aoc, enterprise } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.2.08 1.83 1.21 1.83 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21.96-.26 1.98-.39 3-.4 1.02.01 2.04.14 3 .4 2.29-1.53 3.3-1.21 3.3-1.21.66 1.64.24 2.86.12 3.16.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.36.81 1.09.81 2.19 0 1.58-.01 2.86-.01 3.24 0 .31.22.68.83.56A11.8 11.8 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z" />
  </svg>
);

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
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink-950/80 text-neutral-100 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
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
