import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { techassessaiVideo } from '../assets';

const features = [
  "Conversational AI interviewer",
  "Diagram and discuss the solution live",
  "Actionable performance feedback",
];

const tags = ["AI/ML", "LangChain", "Python", "React"];

const TechAssessAI = () => {
  return (
    <div className="relative w-full py-16 lg:py-24">
      <motion.div variants={textVariant()} className="mb-14">
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="text-accent-cyan">01</span>
          <span className="h-px w-10 bg-white/15" />
          Featured Project
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
          TechAssess<span className="text-accent-cyan">AI</span>
        </h2>
      </motion.div>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Media */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="group relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent-cyan/40 to-accent/20 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
          <div className="surface relative overflow-hidden rounded-3xl p-2">
            <video
              className="w-full rounded-2xl"
              controls
              preload="metadata"
            >
              <source src={techassessaiVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <h3 className="text-2xl font-semibold text-neutral-50 lg:text-3xl">
            AI-Powered System Design Interviewer
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-neutral-400">
            A platform to practice for technical interviews by diagramming and
            discussing solutions out loud. The AI guides you through the session,
            surfacing feedback and suggestions as you go.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent-cyan/25 bg-accent-cyan/5 px-3.5 py-1.5 font-mono text-xs text-accent-cyan"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(TechAssessAI, "techassessai");
