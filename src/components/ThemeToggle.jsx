import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/60 text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -12, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 12, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
