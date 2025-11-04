import { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import { useLocation, useNavigate } from "react-router-dom"
import {
  Code,
  Home,
  Menu,
  Palette,
  Sparkles,
  X,
} from "lucide-react"

interface NavItem {
  path: string
  label: string
  icon: typeof Home
  color: string
}

const navItems: NavItem[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: Home,
    color: "text-primary",
  },
  { path: "/projects", label: "Projects", icon: Code, color: "text-success" },
  {
    path: "/designs",
    label: "Designs",
    icon: Palette,
    color: "text-warning",
  },
]

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (path: string) => {
    navigate(path)
    setIsOpen(false)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-[var(--color-bg-secondary)] rounded-lg border border-border shadow-[var(--shadow-raised-lg)] p-4 space-y-3"
            >
              {navItems.map((item, index) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigate(item.path)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all w-full ${
                      active
                        ? "bg-[var(--color-bg-primary)] text-white shadow-[var(--shadow-raised)]"
                        : "hover:bg-[var(--color-bg-base)] text-foreground"
                    }`}
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-5 h-5 ${active ? "text-white" : item.color}`} />
                    <span className="text-sm font-medium text-glow">{item.label}</span>
                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[var(--shadow-raised-lg)] transition-all ${
            isOpen
              ? "bg-[var(--color-bg-primary)] text-white"
              : "bg-[var(--color-bg-secondary)] text-foreground border border-border"
          }`}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: isOpen
              ? "0 0 20px rgba(33, 150, 243, 0.5)"
              : "var(--shadow-raised-lg)",
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative"
              >
                <Menu className="w-6 h-6" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-3 h-3 text-primary" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  )
}

