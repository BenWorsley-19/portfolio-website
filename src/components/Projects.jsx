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
          color: "text-red-500",
        },
        {
          name: "chatgpt",
          color: "text-sky-500",
        },
        {
          name: "elevenlabsai",
          color: "text-blue-500",
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
          color: "text-cyan-500",
        }
      ],
      image: aoc,
      source_code_link: "https://github.com/BenWorsley-19/AdventOfCode2023/tree/main",
    },
    {
      name: "Music Enterprise",
      description:
        "I made this to provide an example of OO design my colleagues new to coding.",
      tags: [
        {
          name: "java",
          color: "text-orange-500",
        },
      ],
      image: enterprise,
      source_code_link: "https://github.com/BenWorsley-19/music-enterprise",
    },
    {
      name: "3D Space Visual",
      description:
        "This was the result of me experimenting with Three.js and creating 3D graphics with Blender.",
      tags: [
        {
          name: "React",
          color: "text-blue-500",
        },
        {
          name: "Three.js",
          color: "text-sky-500",
        },
        {
          name: "TailwindCSS",
          color: "text-purple-500"
        },
        {
          name: "Blender",
          color: "text-yellow-500",
        },
      ],
      image: robot,
      source_code_link: "https://github.com/BenWorsley-19/ThreeDRobot",
    },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className='w-full'
    >
      <div className='group relative w-full max-w-sm mx-auto'>
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
        
        {/* Main card */}
        <div className='relative backdrop-blur-md bg-white/60 border border-white/30 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] w-full'>
          <div className='relative w-full h-56 mb-6 overflow-hidden rounded-2xl'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            
            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            {/* GitHub button */}
            <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <button 
                onClick={() => window.open(source_code_link, "_blank")}
                className='backdrop-blur-md bg-white/80 hover:bg-white/90 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110'  
              >
                <img src={github} alt="github" className='w-6 h-6 object-contain'/>
              </button>            
            </div>  
          </div>
          
          <div className='space-y-4'>
            <h3 className='text-gray-800 font-bold text-xl lg:text-2xl group-hover:text-sky-500 transition-colors duration-300'>
              {name}
            </h3>
            <p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
              {description}
            </p>
            
            <div className='flex flex-wrap gap-2 pt-2'>
              {tags.map((tag) => (
                <span 
                  key={tag.name} 
                  className={`px-3 py-1 text-xs lg:text-sm font-semibold ${tag.color} bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:scale-105 transition-transform duration-200`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
    return (
      <div className="relative w-full">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-40 h-40 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-r from-blue-300 to-sky-300 rounded-full opacity-20 blur-2xl"></div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-400 md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold mb-4">
            Short Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className='text-gray-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto'>
            The following are side projects I've made with the intention of learning a new technology or just to have a little fun.
          </p>  
        </div>
        
        <div className='w-full max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 place-items-center'>
            {projectDefinitions.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`} 
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default SectionWrapper(Projects, "projects");