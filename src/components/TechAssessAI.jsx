import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { techassessaiVideo, github } from '../assets';

const TechAssessAI = () => {
  return (
    <div className="relative w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-r from-blue-300 to-sky-300 rounded-full opacity-20 blur-2xl"></div>
      </div>
      
      <motion.div variants={textVariant()}>
        <div className="text-center mb-12">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-400 md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold mb-4">
            Featured Project: TechAssessAI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative backdrop-blur-md bg-white/60 border border-white/30 rounded-3xl p-4 shadow-2xl">
              <video
                className="w-full h-auto rounded-2xl shadow-lg"
                controls
                preload="metadata"
                poster=""
              >
                <source src={techassessaiVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                AI-Powered Technical Assessment Platform
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                TechAssessAI is an innovative platform that leverages artificial intelligence to 
                revolutionize technical interviews and assessments. The platform provides 
                automated code evaluation, real-time feedback, and comprehensive analysis 
                of coding solutions.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-800">Key Features:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    Real-time code analysis and feedback
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    Automated test case generation
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    Performance metrics and optimization suggestions
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    Multi-language support for various programming languages
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 text-sm font-semibold text-sky-600 bg-sky-100 rounded-full border border-sky-200">
                  #AI/ML
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-cyan-600 bg-cyan-100 rounded-full border border-cyan-200">
                  #React
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-sky-600 bg-sky-100 rounded-full border border-sky-200">
                  #Node.js
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full border border-orange-200">
                  #Python
                </span>
              </div>

              {/* GitHub Link Button */}
              <div className="pt-6">
                <button 
                  onClick={() => window.open("https://github.com/yourusername/techassessai", "_blank")}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img src={github} alt="github" className="w-5 h-5" />
                  View Source Code
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(TechAssessAI, "techassessai"); 