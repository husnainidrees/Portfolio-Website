import { motion } from 'framer-motion'
import { FiAward, FiBookOpen } from 'react-icons/fi'
import { education, certifications } from '../data/portfolio.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid gap-6 lg:grid-cols-3">
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6 lg:col-span-2"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  <FiBookOpen size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-300">
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {edu.duration} · {edu.detail}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                <FiAward size={22} />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
