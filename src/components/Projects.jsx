import { motion } from 'framer-motion';

import { github, robot, frenchai, aoc, enterprise } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const projectDefinitions = [
    {
      name: "AI French Teacher",
      description:
        "A tool which harnesses ChatGPT, ElevenLabsAI, and the news API to generate and read aloud a french lesson based on todays French sports news.",
      tags: [
        {
          name: "python",
          color: "text-[#E6272A]",
        },
        {
          name: "chatgpt",
          color: "text-[#E6272A]",
        },
        {
          name: "elevenlabsai",
          color: "text-[#E6272A]",
        },
      ],
      image: frenchai,
      source_code_link: "https://github.com/BenWorsley-19/FrenchRevisionAI",
    },
    {
      name: "Advent of Code",
      description:
        "A collection of solutions to all 50 of the Advent of Code challenges, written in Go. I used this as an opportunity to learn Go and improve my problem solving skills.",
      tags: [
        {
          name: "Go",
          color: "text-[#E6272A]",
        }
      ],
      image: aoc,
      source_code_link: "https://github.com/BenWorsley-19/AdventOfCode2023/tree/main",
    },
    {
      name: "Music Enterprise",
      description:
        "I put this together so to provide an example of an enterprise-like codebase with regards to OO design and styles of tests to my friends who do not much experience working in large codebases.",
      tags: [
        {
          name: "java",
          color: "text-[#E6272A]",
        },
      ],
      image: enterprise,
      source_code_link: "https://github.com/BenWorsley-19/music-enterprise",
    },
    {
      name: "3D Space Visual",
      description:
        "This was the result of me expiermenting with Three.js and creating 3D graphics with Blender.",
      tags: [
        {
          name: "React",
          color: "text-[#E6272A]",
        },
        {
          name: "Three.js",
          color: "text-[#E6272A]",
        },
        {
          name: "TailwindCSS",
          color: "text-[#E6272A]"
        },
        {
          name: "Blender",
          color: "text-[#E6272A]",
        },
      ],
      image: robot,
      source_code_link: "https://github.com/BenWorsley-19/ThreeDRobot",
    },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='w-full flex justify-center mt-6'
    >
      <div
        className='bg-gradient-to-br from-[#cfe8d9] to-[#A9D8F7] mx-0 md:mx-6 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full sm:h-[230px] h-[280px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-[#6b6c6b] w-9 h-9 rounded-full flex justify-center items-center cursor-pointer'  
            >
              <img src={github} alt="github" className='w-10/12 h-10/12 object-contain'/>
            </div>            
          </div>  
        </div>
        <div className='mt-5'>
          <h3 className='text-[#121212] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>  
      </div>
    </motion.div>
  );
};

const Projects = () => {
    return (
      <>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7defaae9] to-[#007EA7] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          My Projects
        </h2>
        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-30 text-[17px] leading-[30px]'
          >
            The following are side projects I've made with the intention of leraning a new technology or just to have a little fun.
          </motion.p>  
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          {projectDefinitions.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              index={index}
              {...project}
            />
          ))}
        </div>
      </>
  );
};

export default SectionWrapper(Projects, "projects");