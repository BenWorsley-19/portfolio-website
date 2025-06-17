import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import 'react-vertical-timeline-component/style.min.css';
import { SectionWrapper } from "../hoc";


const experiences = [
  {
    title: "Matillion Application Kubernetes Environment Runner (MAKER)",
    company_name: "Matillion",
    date: "23-24",
    points: [
      "Internal CLI tool to spin up a local Kubernetes cluster for full Data Productivity Cloud stack.",
      "85% faster test cycles for developers.",
      "Utilises ArgoCD appsets and Helm Charts of services in Matillion's Data Productivity Cloud to spin up required infra.",
      "Worked with DevX and collaborated with dev teams to understand requirements to spin up their services.",
    ],
    tags: [
      {
        name: "Python",
        color: "text-yellow-500",
      },
      {
        name: "Kubernetes",
        color: "text-blue-500",
      },
      {
        name: "ArgoCD",
        color: "text-orange-500",
      },
      {
        name: "Terraform",
        color: "text-purple-500",
      },
      {
        name: "Docker",
        color: "text-cyan-500",
      },
      {
        name: "CircleCI",
        color: "text-sky-500",
      },
      {
        name: "Agile/Scrum",
        color: "text-pink-500",
      },
    ],
    icon: "🚀"
  },
  {
    title: "Create Your Own Connector (CYOC)",
    company_name: "Matillion",
    date: "21-23",
    points: [
      "React and Java Spring Boot SaaS application which enables users to pull data from any REST API through executing API Requests based on user provided configuration.",
      "Nominated for Most Innovative Cloud Product or Service at Cloud Excellence Awards.",
      "Enabled users to create 40 connectors in one quarter, from one connector the previous.",
      "Reimagined monolith feature of AMI product into SAAS Micro-service and library based architecture.",
      "Liaised with key stakeholders, acting as bridge between technical discussion to Product Roadmap ",
    ],
    tags: [
      {
        name: "Java",
        color: "text-orange-500",
      },
      {
        name: "Spring",
        color: "text-sky-500",
      },
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "Postgres",
        color: "text-indigo-500",
      },
      {
        name: "Docker",
        color: "text-cyan-500",
      },
      {
        name: "BitbucketPipelines",
        color: "text-purple-500",
      },
      {
        name: "Microservices",
        color: "text-red-500",
      },
      {
        name: "Agile/Scrum",
        color: "text-pink-500",
      },
    ],
    icon: "🔧"
  },
  {
    title: "Engineering Manager",
    company_name: "Matillion",
    date: "19-21",
    points: [
      "Managed pod of 30+ multi-disciplined people with 4 Team Leaders as direct reports through the pandemic.",
      "Grew Engineering team from 20 to 100+ through recruitment initiatives, including defining tech tests and interview standards.",
      "Produced and continually refined Career Progression framework for Engineering department, defining the roles of engineer, senior and staff.",
      "Championed Diversity and Inclusion initiatives, including attending Women in Tech conference on behalf of Matillion.",
    ],
    tags: [],
    icon: "👥"
  },
  {
    title: "Custom Connector Framework",
    company_name: "Matillion",
    date: "17-19",
    points: [
      "Framework to stream data from a defined source to Cloud Data Warehouse via config and http calls.",
      "Improved test cycle from 2 weeks to 2 days with previous third party software.",
      "Tactical move away from reliance on third party.",
      "Enabled 30 percent faster support requests.",
    ],
    tags: [
      {
        name: "Java",
        color: "text-orange-500",
      },
      {
        name: "BitbucketPipelines",
        color: "text-purple-500",
      },
      {
        name: "Agile/Kanban",
        color: "text-pink-500",
      },
    ],
    icon: "⚙️"
  },
];


const ExperienceCard = ({ index, experience }) => (
    <motion.div 
      variants={slideIn("left", "tween", index * 0.2, 0.75)}
      className='relative group w-full'
    >
      <div className='flex items-start mb-12 w-full'>
        {/* Timeline dot and line */}
        <div className='flex flex-col items-center mr-8 flex-shrink-0'>
          <div className='flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110'>
            <span className='text-white text-xl'>{experience.icon}</span>
          </div>
          {index < experiences.length - 1 && (
            <div className='w-0.5 h-20 bg-gradient-to-b from-sky-500 to-cyan-500 mt-4'></div>
          )}
        </div>
        
        {/* Content card */}
        <div className='flex-1 w-full'>
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          
          {/* Main card */}
          <div className='relative backdrop-blur-md bg-white/60 border border-white/30 rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.01] w-full'>
            <div className='mb-6'>
              <div className='flex flex-wrap items-center justify-between mb-4'>
                <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-800 border border-sky-200'>
                  {experience.date} • {experience.company_name}
                </span>
              </div>
              <h3 className='text-gray-800 font-bold text-xl lg:text-2xl mb-4 group-hover:text-sky-500 transition-colors duration-300'>
                {experience.title}
              </h3>
            </div>
            
            <ul className="space-y-3 mb-6">
              {experience.points.map((point, pointIndex) => (
                <li
                  key={`experience-point-${pointIndex}`}
                  className="flex items-start text-gray-700 text-sm lg:text-base leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mt-2 mr-3"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            {experience.tags.length > 0 && (
              <div className='flex flex-wrap gap-2'>
                {experience.tags.map((tag) => (
                  <span 
                    key={tag.name} 
                    className={`px-3 py-1 text-xs lg:text-sm font-semibold ${tag.color} bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:scale-105 transition-transform duration-200`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
);

const Experience = () => {
  return (
    <div className="relative w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-300 to-sky-300 rounded-full opacity-20 blur-2xl"></div>
      </div>
      
      <div className="text-center mb-16">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-400 md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold mb-4">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        <p className='text-gray-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto'>
          The following are some of the projects, experiences and initiatives from my career.
        </p>
      </div>
      
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-8">
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              index={index}
              experience={experience}
            />
          ))}
        </div>
      </div>
      
      <div className='text-center mt-16'>
        <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
          <p className='text-lg lg:text-xl text-gray-700 leading-relaxed'>
            For more details about my experience, please reach out for my CV via{' '}
            <a 
              href="https://www.linkedin.com/in/benworsley/" 
              target="_blank" 
                              className='text-sky-500 hover:text-cyan-500 font-semibold hover:underline transition-colors duration-300'
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "experience");