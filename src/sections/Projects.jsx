import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight, FiFolder } from 'react-icons/fi'
import { projects } from '../data/portfolio.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Real projects from production and research — built end to end."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="card group flex flex-col p-6 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-500/10 dark:hover:border-brand-500/40"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:bg-brand-500/10 dark:text-brand-300">
                  <FiFolder size={20} />
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="text-slate-400 transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                  >
                    <FiGithub size={20} />
                  </a>
                )}
              </div>

              <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400">
                {project.type}
              </span>
              <h3 className="mb-2 flex items-center gap-1 text-lg font-bold text-slate-900 dark:text-white">
                {project.title}
                <FiArrowUpRight
                  className="opacity-0 transition-opacity group-hover:opacity-100 text-brand-500"
                  size={16}
                />
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
