import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { interviewAssistant } from '../assets';

const features = [
  "Real-time interviewer coaching",
  "Dynamic question suggestions",
  "Candidate evaluation insights",
  "Interview feedback and analysis",
];

const tags = ["AI/ML", "Gemini", "React", "Python"];

const EvalynAI = () => {
  return (
    <div className="relative w-full py-16 lg:py-24">
      <motion.div variants={textVariant()} className="mb-14 text-right">
        <p className="eyebrow mb-4 flex items-center justify-end gap-3">
          Featured Project
          <span className="h-px w-10 bg-white/15" />
          <span className="text-accent-violet">02</span>
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
          Evalyn<span className="text-accent-violet">AI</span>
        </h2>
      </motion.div>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="order-2 lg:order-1">
          <h3 className="text-2xl font-semibold text-neutral-50 lg:text-3xl">
            AI Interview Assistant &amp; Coach
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-neutral-400">
            An intelligent assistant that helps interviewers run better
            interviews. EvalynAI offers real-time advice, suggested questions,
            and guidance for thorough, consistent candidate evaluation.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent-violet/25 bg-accent-violet/5 px-3.5 py-1.5 font-mono text-xs text-accent-violet"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Media */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="group relative order-1 lg:order-2"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent-violet/40 to-accent/20 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
          <div className="surface relative overflow-hidden rounded-3xl p-2">
            <img
              src={interviewAssistant}
              alt="EvalynAI interface"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(EvalynAI, "evalynai");
