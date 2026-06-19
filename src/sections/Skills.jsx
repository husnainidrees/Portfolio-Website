import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolio.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="A toolkit spanning backend engineering, modern frontend development, and applied machine learning."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="card p-6 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:border-brand-500/40"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
