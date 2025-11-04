import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-foreground text-glow">
              Vimal&apos;s Portfolio
            </div>
            <Link to="/login">
              <Button variant="raised">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.section
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto text-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I&apos;m Vimal. I build scalable web applications that
                actually work in production. I focus on clean code structure,
                TypeScript for type safety, proper folder organization, and
                setting up the right tools like ESLint and Git hooks to keep
                everything maintainable.
              </motion.p>
              <motion.p
                className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Take a look inside to see how I structure projects, handle state
                management with Redux Toolkit, set up authentication, and
                implement the kind of architecture that scales with your team.
              </motion.p>
            </div>

            <motion.div
              className="flex justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/login">
                <Button variant="primary" size="lg">
                  View Portfolio
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" size="lg">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.section>
        </motion.div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-[var(--color-text-muted)]">
            <p>
              © 2024 Vimal&apos;s Portfolio. Built with React + TypeScript +
              Enterprise Standards
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
