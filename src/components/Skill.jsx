import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '../utils/motion';

const skills = [
    {
        title: "OO Design",
        rating: "Confident",
        percentage: 90,
        color: "from-sky-400 to-cyan-500",
        icon: "🎯"
    },
    {
        title: "People Management",
        rating: "Confident",
        percentage: 90,
        color: "from-blue-400 to-indigo-500",
        icon: "👥"
    },
    {
      title: "Java",
      rating: "Confident",
      percentage: 90,
      color: "from-orange-400 to-red-500",
      icon: "☕"
    },
    {
        title: "Mentoring",
        rating: "Confident",
        percentage: 90,
        color: "from-purple-400 to-pink-500",
        icon: "🎓"
      },
    {
        title: "Python",
        rating: "Strong",
        percentage: 70,
        color: "from-yellow-400 to-orange-500",
        icon: "🐍"
    },
    {
        title: "JavaScript/React",
        rating: "Capable",
        percentage: 50,
        color: "from-cyan-400 to-blue-500",
        icon: "⚛️"
    },
  ];

const SkillChart = () => {
    return (
        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-8'
        >
            <div className='grid gap-6 md:gap-8'>
                {skills.map((skill, index) => (
                    <motion.div
                        variants={zoomIn(index * 0.1, 0.75)}
                        key={skill.title}
                        className='group'
                    >
                        <div className='backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]'>
                            <div className='flex items-center justify-between mb-4'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-2xl'>{skill.icon}</span>
                                    <h3 className='text-gray-800 text-xl lg:text-2xl font-bold'>
                                        {skill.title}
                                    </h3>
                                </div>
                                <div className='text-right'>
                                    <p className='text-gray-600 font-medium text-sm lg:text-base'>
                                        {skill.rating}
                                    </p>
                                    <p className='text-gray-500 text-sm font-medium'>
                                        {skill.percentage}%
                                    </p>
                                </div>
                            </div>
                            
                            <div className='relative'>
                                <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
                                    <motion.div 
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                    </motion.div>
                                </div>
                                
                                <div className='flex justify-between mt-2 text-xs text-gray-500'>
                                    <span>Beginner</span>
                                    <span>Expert</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default SkillChart


