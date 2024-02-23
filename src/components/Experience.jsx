import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import 'react-vertical-timeline-component/style.min.css';
import { SectionWrapper } from "../hoc";


const experiences = [
  {
    title: "Matillion Application Kubernetes Environment Runner (MAKER)",
    company_name: "Matillion",
    date: "23-24",
    points: [
      "Internal CLI tool to spin up a local kubernetes environment for development and testing.",
      "Harnecceses ArgoCD and Helm Charts of services of Matillion's Data Productivity Cloud to spin up required infra.",
      "Worked with DevX and collaborated with dev teams to understand requirements to spin up their services.",
      "80% faster test cycles for developers.",
    ],
    tags: [
      {
        name: "Python",
        color: "text-[#E6272A]",
      },
      {
        name: "Kubernetes",
        color: "text-[#E6272A]",
      },
      {
        name: "ArgoCD",
        color: "text-[#E6272A]",
      },
      {
        name: "Terraform",
        color: "text-[#E6272A]",
      },
      {
        name: "Docker",
        color: "text-[#E6272A]",
      },
      {
        name: "CircleCI",
        color: "text-[#E6272A]",
      },
      {
        name: "Agile/Scrum",
        color: "text-[#E6272A]",
      },
    ],
  },
  {
    title: "Create Your Own Connector (CYOC)",
    company_name: "Matillion",
    date: "21-23",
    points: [
      "Service with UI to describe source API's and generate a connector.",
      "Early service in Matillion's Data Producitivy Cloud.",
      "Nominated for Most Innovative Cloud Product or Service at Cloud Excellence Awards",
      "Collaborated with Product team on customer interviews to define requirements.",
      "Enabled users to create 40 connectors in one quarter, from one connector",
    ],
    tags: [
      {
        name: "Java",
        color: "text-[#E6272A]",
      },
      {
        name: "Spring",
        color: "text-[#E6272A]",
      },
      {
        name: "React",
        color: "text-[#E6272A]",
      },
      {
        name: "Postgres",
        color: "text-[#E6272A]",
      },
      {
        name: "Docker",
        color: "text-[#E6272A]",
      },
      {
        name: "Bitbucket Pipelines",
        color: "text-[#E6272A]",
      },
      {
        name: "Microservices",
        color: "text-[#E6272A]",
      },
      {
        name: "Agile/Scrum",
        color: "text-[#E6272A]",
      },
    ],
  },
  {
    title: "Engineering Manager",
    company_name: "Matillion",
    date: "19-21",
    points: [
      "Managed and grew a team of 2 to a pod of 30+ engineers with 4 Team Lead reports through Covid.",
      "Grew Engineering team from 20 to 100+ through recruitment initiatives,  defining tech tests and interview standards.",
      "Implemented career development framework, defining the roles of engineer, senior and staff.",
      "Championed Diversity and Inclusion initiatives, including attending Women in Tech conference on behalf of Matillion.",
    ],
    tags: []
  },
  {
    title: "Custom Connector Framework",
    company_name: "Matillion",
    date: "17-19",
    points: [
      "Framework to stream data from a defined source to Cloud Data Warehouse via config and http calls.",
      "Improved test cycle from 2 weeks to 2 days.",
      "Tactical move away from reliance on third party.",
      "Enabled 30 percent faster support requests.",
    ],
    tags: [
      {
        name: "Java",
        color: "text-[#E6272A]",
      },
      {
        name: "Bitbucket Pipelines",
        color: "text-[#E6272A]",
      },
      {
        name: "Agile/Kanban",
        color: "text-[#E6272A]",
      },
    ],
  },
];


const ExperienceCard = ({ index, experience }) => (
  <motion.ol 
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='flex flex-col md:flex-row relative border-l border-[#8b8b8b]'
  >
    <li className='mb-10 ml-4'>
      <div className='absolute w-4 h-4 bg-[#8b8b8b] rounded-full mt-3.5 -left-2 border border-white' />
      <div className='w-full bg-gradient-to-br from-[#cfe8d9] to-[#A9D8F7] rounded-2xl p-4'>
        <div className='grid grid-row-2 gap-4 items-center justify-start'>
          <span className='text-[#121212] text-xs md:text-s '>
            {experience.date} - {experience.company_name}
          </span>
          <h3 className='text-[#121212] font-bold text-[24px]'>
            {experience.title}
          </h3>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[#121212] text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
        <div className='mt-4 flex flex-wrap gap-2'>
          {experience.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </li>
  </motion.ol>
);

const Experience = () => {
  return (
    <>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7defaae9] to-[#007EA7] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Experience
      </h2>
      <div className='w-full flex'>
        <p className='mt-30 text-[17px] text-[#121212] leading-[30px]'>
          The following are some of the projects, experiences  and initiatives from my career. For more, please reach out for my CV.
        </p>
      </div>
      <div className="my-10 flex flex-row items-center justify-center">
        <div className="w-full md:w-7/12">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              index={index} 
              experience={experience} 
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience");