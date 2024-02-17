import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const About = () => {
    return (
        <>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#7defaae9] to-[#007EA7] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                About
            </h2>
            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] leading-[30px]'
            >
                <p className='mb-4'>
                So! a brief career summary goes like this... I started my career through the apprenticeship route with a company called Bright Future Software which offered to pay for my degree. 3 years later
                that company went bust and I was left to figure out what was next for me. Fortunately, that turned out to be one of the best things to happen as I found a start up called <a href="https://www.matillion.com/" target="_blank" className='text-[#007EA7] hover:underline'>Matillion</a>.
                I joined a business of around 12 people as the second full time engineer which 8 years later is now a rare Unicorn company with over 600 employees.
                </p>
                <p className='mb-4'>
                That level of growth afforded me the opportunity to grow with it. I have been able to take on various roles and challenges in my time at Matillion that ranged from very technical to very people focused.
                In that time I have taken services live as one of Matillion's first SAAS offerings, created local development platforms based on kubernetes, built engineering frameworks to deliver connectors for the business, managed and grown a team
                of 2 to a pod of 30+ engineers through Covid, and defined and implemented key engineering processes from tech test and recruitment plans to career development frameworks. For more detail on these skip ahead to the career section!
                </p>
            </motion.div>
        </>
    )
}

export default SectionWrapper(About, "about")


