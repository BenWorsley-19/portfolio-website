import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '../utils/motion';

const skills = [
    {
        title: "OO Design",
        rating: "Confident",
        percentage: "90%",
    },
    {
        title: "People Management",
        rating: "Confident",
        percentage: "90%",
    },
    {
      title: "Java",
      rating: "Confident",
      percentage: "90%",
    },
    {
        title: "Mentoring",
        rating: "Confident",
        percentage: "90%",
      },
    {
        title: "Python",
        rating: "Strong",
        percentage: "70%",
    },
    {
        title: "JavaScript/React",
        rating: "Capable",
        percentage: "50%",
    },
  ];

const SkillChart = () => {
    return (
        <>
            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] leading-[30px]'
            >
                <div className='w-full flex flex-col gap-4'>
                    {skills.map((skill, index) => (
                        <motion.div
                            variants={zoomIn(index * 0.5, 0.75)}
                            key={skill.title}
                            className='w-full flex justify-center mt-2'
                        >
                            <div className='w-10/12 lg:w-7/12 grid grid-flow-row items-center'>
                                <h3 className='text-[#121212] text-[24px]]'>
                                    {skill.title}
                                </h3>
                                <div 
                                    className={`bg-gradient-to-br from-[#cfe8d9] to-[#A9D8F7] rounded-full`}
                                    style={{ width: skill.percentage }}
                                >
                                    <p className='text-[#121212] text-center text-[14px] pl-1 tracking-wider'>
                                        {skill.rating}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
            </motion.div>
        </>
    )
}

export default SkillChart


