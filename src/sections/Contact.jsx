import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi'
import { personal } from '../data/portfolio.js'
import SectionHeading from '../components/SectionHeading.jsx'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only: open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm(initialForm)
    setTimeout(() => setSent(false), 4000)
  }

  const contactItems = [
    { icon: FiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: FiPhone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: personal.location, href: null },
  ]

  const socials = [
    { icon: FiGithub, href: personal.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a role or project in mind? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="card flex items-center gap-4 p-4 transition-all hover:border-brand-300 dark:hover:border-brand-500/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
                      <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                        {value}
                      </p>
                    </div>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                )
              })}
            </div>

            <div className="mt-4 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
                >
                  <Icon size={17} /> {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card space-y-4 p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="input"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="input"
                />
              </Field>
            </div>
            <Field label="Message">
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about the opportunity..."
                className="input resize-none"
              />
            </Field>
            <button type="submit" className="btn-primary w-full">
              {sent ? (
                <>
                  Message ready <FiCheck size={16} />
                </>
              ) : (
                <>
                  Send Message <FiSend size={16} />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400">
              This opens your email client with the message prefilled.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">
        {label}
      </span>
      {children}
    </label>
  )
}
