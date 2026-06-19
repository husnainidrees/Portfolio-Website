import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { about } from '../data/portfolio.js'
import SectionHeading from '../components/SectionHeading.jsx'

const words = about.summary.split(' ')

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Turning complex problems into clean solutions"
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Animated text reveal */}
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.015 }}
            className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:col-span-3"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0.15 },
                  show: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-6 lg:col-span-2"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
              Core Strengths
            </h3>
            <ul className="space-y-3">
              {about.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-brand-500" size={18} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
