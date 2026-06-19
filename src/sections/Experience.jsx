import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/portfolio.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="A track record of shipping production software across full-stack and AI/ML teams."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-500 via-slate-200 to-transparent dark:via-slate-700 sm:left-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => {
              const left = i % 2 === 0
              return (
                <motion.div
                  key={job.company + job.duration}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                    left ? 'sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'
                  }`}
                >
                  {/* Dot */}
                  <span
                    className={`absolute left-2 top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-500 bg-white dark:bg-[#0a0a0f] sm:left-auto ${
                      left ? 'sm:-right-[10px]' : 'sm:-left-[10px]'
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-500" />
                  </span>

                  <div className="card p-5 text-left transition-all hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:border-brand-500/40">
                    <div className="mb-2 flex items-center gap-2 text-brand-600 dark:text-brand-300">
                      <FiBriefcase size={15} />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {job.duration}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {job.company}
                    </p>
                    <ul className="space-y-2">
                      {job.points.map((point, pi) => (
                        <li
                          key={pi}
                          className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
