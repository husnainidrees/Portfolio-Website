import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personal } from '../data/portfolio.js'

const year = new Date().getFullYear()

export default function Footer() {
  const socials = [
    { icon: FiGithub, href: personal.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
  ]

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {personal.name}. Built with React, Tailwind &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-500 dark:hover:text-brand-300"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
