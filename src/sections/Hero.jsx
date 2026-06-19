import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { personal } from '../data/portfolio.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:bg-grid-dark" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] dark:bg-brand-600/20" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container flex flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-sm text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl font-semibold sm:text-2xl"
        >
          <span className="gradient-text bg-[length:200%_auto] animate-gradient-x">
            {personal.role}
          </span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg"
        >
          {personal.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
        >
          <FiMapPin size={15} /> {personal.location}
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn-primary">
            View Projects <FiArrowDown size={16} />
          </a>
          <a href={personal.resumeUrl} download className="btn-ghost">
            Download CV <FiDownload size={16} />
          </a>
          <a href="#contact" className="btn-ghost">
            Contact <FiMail size={16} />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-3">
          {[
            { icon: FiGithub, href: personal.github, label: 'GitHub' },
            { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
            { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-500 dark:hover:text-brand-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
