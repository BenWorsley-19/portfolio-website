import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { interviewAssistant, github } from '../assets';

const EvalynAI = () => {
  return (
    <div className="relative w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full opacity-20 blur-2xl"></div>
      </div>
      
      <motion.div variants={textVariant()}>
        <div className="text-center mb-12">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-400 md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold mb-4">
            Featured Project: EvalynAI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative backdrop-blur-md bg-white/60 border border-white/30 rounded-3xl p-4 shadow-2xl">
              <img
                src={interviewAssistant}
                alt="EvalynAI Interface"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                AI Interview Assistant & Coach
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                An intelligent AI assistant and coach designed to help interviewers conduct better interviews. 
                EvalynAI provides real-time advice, suggested questions, and guidance to ensure thorough and effective candidate evaluation.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-800">Key Features:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Real-time interviewer coaching
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Dynamic question suggestions
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Candidate evaluation insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Interview feedback and analysis
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full border border-purple-200">
                  #AI/ML
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-pink-600 bg-pink-100 rounded-full border border-pink-200">
                  #Gemini
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full border border-indigo-200">
                  #React
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-cyan-600 bg-cyan-100 rounded-full border border-cyan-200">
                  #Python
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(EvalynAI, "evalynai"); 