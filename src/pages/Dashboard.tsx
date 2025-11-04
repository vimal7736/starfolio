import { motion } from "framer-motion"
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Rocket,
  Shield,
  Wrench,
  Zap,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

import { ProjectFlowDiagram } from "@/components/diagrams/ProjectFlowDiagram"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { logout } from "@/store/slices/authSlice"

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

export default function Dashboard() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  const workHistory = [
    {
      company: "Tecbert LLP",
      period: "Sep 2023 - Present",
      location: "Calicut, India",
      role: "React.js Developer",
      achievements: [
        "Built responsive UIs using React.js, TypeScript, Redux Toolkit, and RTK Query ensuring optimal performance",
        "Integrated Supabase for real-time data synchronization and backend services",
        "Implemented secure authentication with JWT and Keycloak for enterprise identity management with RBAC",
        "Designed modern UIs with Tailwind CSS and shadcn/ui maintaining design consistency",
        "Utilized AI tools (ChatGPT, Copilot, Claude) for rapid prototyping, optimization, and architecture decisions",
        "Leveraged React Hook Form for efficient form management with complex validation across multi-step forms",
        "Built data-rich interfaces using TanStack Table for advanced visualization, sorting, filtering, and pagination",
      ],
    },
    {
      company: "Infinite Open Source Solutions LLP",
      period: "Dec 2022 - Aug 2023",
      location: "Calicut, India",
      role: "React.js Developer",
      achievements: [
        "Migrated legacy Laravel applications to React.js, improving UI/UX, performance, and maintainability",
        "Developed custom React hooks for code reusability, reducing development time by 25%",
        "Enhanced UX with real-time features including session tracking with live clock timers",
        "Collaborated with backend teams to design and consume RESTful APIs",
      ],
    },
    {
      company: "Futura Labs",
      period: "May 2022 - Dec 2022",
      location: "Calicut, India",
      role: "MERN Stack Intern",
      achievements: [
        "Built full-stack e-commerce features including dynamic filter cart functionality",
        "Developed reusable custom hooks improving code quality and productivity",
        "Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js stack",
      ],
    },
  ]

  const projects = [
    {
      title: "Desklog Time Tracking Software",
      description:
        "Comprehensive time tracking application featuring real-time task monitoring and visual timeline representation",
      tech: [
        "React.js",
        "TypeScript",
        "Redux Toolkit",
        "TanStack Table",
        "Tailwind CSS",
        "Chart.js",
      ],
      highlights: [
        "Interactive data tables using TanStack Table for efficient task management with sorting and filtering",
        "Dynamic charts and analytics dashboards to visualize productivity metrics and time allocation",
        "Integrated Redux Toolkit for seamless state management across multiple tracking modules",
      ],
    },
    {
      title: "Customer Onboarding Platform",
      description:
        "Comprehensive customer onboarding application with sophisticated nine-step wizard interface",
      tech: [
        "TypeScript",
        "React.js",
        "RTK Query",
        "React Query",
        "React Hook Form",
        "Tailwind CSS",
        "shadcn/ui",
        "Keycloak",
      ],
      highlights: [
        "Architected comprehensive onboarding application with sophisticated nine-step wizard interface",
        "Implemented Keycloak-based authentication with role-based access control for secure user management",
        "Designed complex form validations and state management across multiple stages using React Hook Form",
        "Integrated server state management using RTK Query for efficient caching and seamless API integration",
      ],
    },
  ]

  const skills = {
    frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    stateManagement: [
      "Redux Toolkit",
      "RTK Query",
      "Tanstack React Query",
      "Context API",
    ],
    formManagement: ["React Hook Form", "Formik", "Yup validation"],
    backend: ["Node.js", "Express.js", "MongoDB", "Supabase (PostgreSQL)"],
    authentication: ["JWT", "Keycloak"],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "npm",
      "yarn",
      "Vite",
      "Create React App",
    ],
    aiTools: ["ChatGPT", "GitHub Copilot", "Claude", "Cursor"],
  }

  const technicalHighlights = [
    {
      title: "Enterprise-Level Architecture",
      description:
        "Feature-based modular structure for scalability and maintainability",
      icon: Building2,
    },
    {
      title: "Modern State Management",
      description:
        "Redux Toolkit + RTK Query for automatic API caching and intelligent state management",
      icon: RefreshCw,
    },
    {
      title: "Type Safety",
      description:
        "Full TypeScript coverage with strict mode, typed Redux hooks, and API transformations",
      icon: Shield,
    },
    {
      title: "Performance Optimization",
      description:
        "RTK Query caching, React Hook Form for minimal re-renders, and strategic memoization",
      icon: Zap,
    },
    {
      title: "Developer Experience",
      description:
        "MSW for API mocking, Storybook for components, Husky for quality gates",
      icon: Wrench,
    },
    {
      title: "Production-Ready",
      description:
        "Error boundaries, loading states, comprehensive error handling, responsive design",
      icon: Rocket,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-foreground text-glow">
              Vimal&apos;s Folio
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/")}>
                {user && (
                  <span className="text-sm text-[var(--color-text-muted)] text-glow">
                    Welcome, {user.username || user.email}
                  </span>
                )}
              </Button>

              <Button
                className="cursor-pointer"
                variant="raised"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.section
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-glow-strong">
              Vimal Suresh T
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Calicut, Kerala, INDIA
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91 7736173889
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                vimalonboard69@gmail.com
              </span>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <Card variant="raised" className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-glow">
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Software Developer with expertise in React.js and TypeScript.
                  Specialized in scalable web applications with modern state
                  management (Redux Toolkit, RTK Query) and enterprise
                  authentication (JWT, Keycloak). Proficient in form-driven
                  applications using React Hook Form and data interfaces with
                  TanStack Table. Leverages AI tools (Cursor, GitHub Copilot,
                  Claude, ChatGPT) to accelerate development. Good Front-end
                  foundation with continuous learning mindset.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground text-glow">
                Work History
              </h2>
              <div className="space-y-6">
                {workHistory.map((job, index) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card variant="raised" className="p-6">
                      <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-4">
                          <div>
                            <CardTitle className="text-xl text-glow">
                              {job.role}
                            </CardTitle>
                            <CardDescription className="text-glow text-lg mt-1">
                              {job.company} • {job.location}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="text-sm">
                            {job.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-[var(--color-text-muted)]"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground text-glow">
                Professional Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card variant="raised" className="p-6 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl text-glow">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-glow mt-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">
                            Tech Stack:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">
                            Key Highlights:
                          </p>
                          <ul className="space-y-1">
                            {project.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-[var(--color-text-muted)] flex items-start gap-2"
                              >
                                <span className="text-primary mt-1">✓</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground text-glow">
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <Card key={category} variant="raised" className="p-6">
                    <CardHeader>
                      <CardTitle className="text-lg text-glow capitalize">
                        {category.replace(/([A-Z])/g, " $1").trim()}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground text-glow">
                Technical Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card variant="raised" className="p-6 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          {(() => {
                            const Icon = highlight.icon
                            return Icon ? (
                              <Icon className="w-8 h-8 text-primary" />
                            ) : null
                          })()}
                          <CardTitle className="text-lg text-glow">
                            {highlight.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-[var(--color-text-muted)]">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-4 text-glow">
                Technology Stack
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                Modern, production-ready technologies following industry best
                practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "React 19.1", desc: "Latest React features" },
                { name: "TypeScript 5.8", desc: "Full type safety" },
                { name: "Redux Toolkit", desc: "Modern state management" },
                { name: "RTK Query", desc: "API caching & management" },
                { name: "React Router v7", desc: "Client-side routing" },
                { name: "Vite", desc: "Lightning-fast build tool" },
                { name: "Tailwind CSS 4", desc: "Utility-first CSS" },
                { name: "shadcn/ui", desc: "Accessible components" },
                { name: "React Hook Form", desc: "Performant forms" },
                { name: "Yup", desc: "Schema validation" },
                { name: "MSW", desc: "API mocking" },
                { name: "Storybook", desc: "Component development" },
                { name: "Vitest", desc: "Fast testing" },
                { name: "ESLint", desc: "Code quality" },
                { name: "Prettier", desc: "Code formatting" },
                { name: "Husky", desc: "Git hooks" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card variant="raised" className="p-4">
                    <div className="text-center space-y-1">
                      <Badge variant="secondary" className="text-sm text-glow">
                        {tech.name}
                      </Badge>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        {tech.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-4 text-glow">
                Architecture Pattern
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] mb-8">
                Feature-Based Modular Architecture for Scalability
              </p>
            </div>

            <Card variant="raised" className="p-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground text-glow">
                    Feature Module Structure
                  </h3>
                  <pre className="bg-[var(--color-bg-secondary)] p-4 rounded-lg overflow-x-auto text-sm font-mono text-[var(--color-text-muted)]">
                    {`Feature Module Structure:
├── api/customer/          # API client functions
├── pages/customer/         # UI pages
├── types/customer/        # TypeScript types
├── global/reducers/customer/   # State management
├── global/service/end-points/customer/  # RTK Query APIs
└── global/validation/customer/  # Form validation schemas`}
                  </pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <Card variant="inset" className="p-4">
                    <h4 className="font-semibold text-foreground mb-2 text-glow">
                      ✓ Easy to Locate
                    </h4>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Related code grouped by domain
                    </p>
                  </Card>

                  <Card variant="inset" className="p-4">
                    <h4 className="font-semibold text-foreground mb-2 text-glow">
                      ✓ Scales Well
                    </h4>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Grows seamlessly as features expand
                    </p>
                  </Card>

                  <Card variant="inset" className="p-4">
                    <h4 className="font-semibold text-foreground mb-2 text-glow">
                      ✓ Team-Friendly
                    </h4>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Multiple developers can work independently
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-4 text-glow">
                How The Project Works - Animated Flow
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] mb-8">
                Interactive visualization showing application flow, state
                management, and form handling processes
              </p>
            </div>
            <ProjectFlowDiagram />
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-4 text-glow">
                Key Features
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                Enterprise-level features built with modern best practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="raised" className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <CardTitle className="text-xl text-glow">
                      Protected Route System
                    </CardTitle>
                  </div>
                  <CardDescription className="text-glow">
                    Role-based access control with authentication guards and
                    permission management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    Role-based access control with authentication guards and
                    permission management.
                  </div>
                </CardContent>
              </Card>

              <Card variant="raised" className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                    <CardTitle className="text-xl text-glow">
                      Multi-Step Forms
                    </CardTitle>
                  </div>
                  <CardDescription className="text-glow">
                    Complex wizard flows with state persistence, validation, and
                    progress tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    Complex wizard flows with state persistence, validation, and
                    progress tracking.
                  </div>
                </CardContent>
              </Card>

              <Card variant="raised" className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <CardTitle className="text-xl text-glow">
                      Real-Time Validation
                    </CardTitle>
                  </div>
                  <CardDescription className="text-glow">
                    Yup schemas with React Hook Form for performant, type-safe
                    form validation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    Yup schemas with React Hook Form for performant, type-safe
                    form validation.
                  </div>
                </CardContent>
              </Card>

              <Card variant="raised" className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <CardTitle className="text-xl text-glow">
                      Smart Caching
                    </CardTitle>
                  </div>
                  <CardDescription className="text-glow">
                    RTK Query with automatic cache invalidation and background
                    refetching.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    RTK Query with automatic cache invalidation and background
                    refetching.
                  </div>
                </CardContent>
              </Card>

              <Card variant="raised" className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <CardTitle className="text-xl text-glow">
                      Type Safety
                    </CardTitle>
                  </div>
                  <CardDescription className="text-glow">
                    Full TypeScript coverage with strict mode, typed Redux
                    hooks, and API transformations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    Full TypeScript coverage with strict mode, typed Redux
                    hooks, and API transformations.
                  </div>
                </CardContent>
              </Card>

              <Card variant="raised" className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                    <CardTitle className="text-xl text-glow">
                      Code Quality
                    </CardTitle>
                  </div>
                  <CardDescription className="text-glow">
                    ESLint, Prettier, Husky hooks, and comprehensive testing
                    setup for maintainability.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    ESLint, Prettier, Husky hooks, and comprehensive testing
                    setup for maintainability.
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <Card variant="raised" className="p-8 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-glow-strong">
                  What I Do as a React Developer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      Architecture & Code Organization
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Design and implement feature-based modular
                          architecture for scalability and maintainability
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Structure codebase with proper separation of concerns
                          (components, pages, types, schemas)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement scalable folder structures that grow
                          seamlessly with team and project size
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      State Management & API Integration
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement Redux Toolkit + RTK Query for intelligent
                          state management and automatic API caching
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Design three-layer API architecture (client functions,
                          RTK Query endpoints, Axios interceptors)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Configure request/response interceptors for automatic
                          token injection and error handling
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement cache invalidation strategies using RTK
                          Query tags for data consistency
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      Form Management & Validation
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Build complex multi-step forms with React Hook Form
                          for optimal performance (minimal re-renders)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement Yup validation schemas for type-safe,
                          reusable form validation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Design form data transformation functions to handle
                          API response variations (snake_case/camelCase)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Ensure form state persistence across navigation using
                          RTK Query caching
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      TypeScript & Type Safety
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement full TypeScript coverage with strict mode
                          across entire application
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Create type-safe Redux hooks (useAppDispatch,
                          useAppSelector) for compile-time error prevention
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Design typed API transformation functions ensuring
                          type safety from API response to component props
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Organize TypeScript types in dedicated folders per
                          feature for maintainability
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      UI/UX & Component Development
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Build responsive UIs using Tailwind CSS and shadcn/ui
                          for accessible, consistent design systems
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Develop reusable custom hooks reducing code
                          duplication and improving productivity
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement data-rich interfaces using TanStack Table
                          for advanced visualization and filtering
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Create component libraries with Storybook for isolated
                          component development and testing
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      Authentication & Security
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement JWT-based authentication with automatic
                          token refresh mechanisms
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Integrate Keycloak for enterprise identity management
                          with role-based access control (RBAC)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Design protected route systems with authentication
                          guards and permission management
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      Performance & Optimization
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Optimize application performance using RTK Query
                          automatic caching to reduce API calls
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement strategic memoization (React.memo, useMemo,
                          useCallback) to prevent unnecessary re-renders
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Use Vite for lightning-fast development builds
                          (3-second builds vs. 30+ seconds with CRA)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Design code-splitting strategies by route for optimal
                          bundle sizes and load times
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      Developer Experience & Tools
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Set up MSW (Mock Service Worker) for API mocking
                          enabling development without backend dependency
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Configure Husky Git hooks for automated linting, type
                          checking, and formatting validation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Leverage AI tools (Cursor, GitHub Copilot, Claude,
                          ChatGPT) for rapid prototyping and architecture
                          decisions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement path aliases (@/components) for clean
                          imports and easier refactoring
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Set up comprehensive ESLint + Prettier configuration
                          for code consistency and quality
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-glow mb-3">
                      Error Handling & Resilience
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implement Error Boundaries to catch and handle
                          component errors gracefully
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Design multi-layer error handling (Axios interceptors,
                          RTK Query error states, Toast notifications)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Create comprehensive loading states for better user
                          experience during async operations
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants} className="text-center py-8">
            <Card variant="inset" className="p-6">
              <p className="text-lg text-[var(--color-text-muted)]">
                Built with React 19, TypeScript, Redux Toolkit, RTK Query, and
                modern best practices
              </p>
            </Card>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}
