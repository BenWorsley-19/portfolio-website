import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Skill from './Skill';


const About = () => {
    return (
        <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-300 to-sky-300 rounded-full opacity-20 blur-2xl"></div>
            </div>
            
            <div className="text-center mb-8">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-400 md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold mb-4">
                    About
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            
            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-8'
            >
                <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-3xl p-8 lg:p-12 shadow-2xl">
                    <div className="prose prose-lg max-w-none">
                        <p className='mb-6 text-gray-700 text-lg leading-relaxed'>
                            So! A brief career summary goes like this... I started my career through the apprenticeship route with a company called Bright Future Software which offered to pay for my degree. Unfortunately, 3 years later
                            that company went bust and I was left to figure out what was next for me. Looking back now, that turned out to be a great stroke of luck as from there I found a startup called <a href="https://www.matillion.com/" target="_blank" className='text-sky-500 hover:text-cyan-500 font-semibold hover:underline transition-colors duration-300'>Matillion</a>.
                            I joined a business of around 12 people as the second full time engineer and 8 years on from that, I have seen Matillion transition to and through a Unicorn company of over 600 employees.
                        </p>
                        <p className='mb-6 text-gray-700 text-lg leading-relaxed'>
                            That level of growth afforded me the opportunity to grow with it. I have been able to take on various roles and challenges in my time at Matillion that ranged from very technical to very people focused.
                            In that time I have taken services live as one of Matillion's first SAAS offerings, created local development platforms based on kubernetes, built engineering frameworks to deliver connectors for the business, managed and grown a team
                            of 2 to a pod of 30+ engineers through Covid, and defined and implemented key engineering processes from tech test and recruitment plans to career development frameworks.  
                        </p>
                        <p className='mb-8 text-gray-700 text-lg leading-relaxed'>
                            The following are some of the core skills I apply to my work.
                        </p>
                    </div>
                </div>
            </motion.div>
            <div className="mt-12">
                <Skill />
            </div>
        </div>
    )
}

export default SectionWrapper(About, "about")


