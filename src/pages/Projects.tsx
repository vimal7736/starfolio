import { useEffect, useRef, useState } from "react"

import { motion } from "framer-motion"
import {
  Code,
  Github,
  Globe,
  Zap,
  Layers,
  Shield,
  ChevronDown,
  Home,
  Palette,
  LogOut,
  Projector,
  Linkedin,
  Mail,
  Download,
  MoreVertical,
  ExternalLink,
  Phone,
  Clock,
  Briefcase,
  FileText,
  BookOpen,
  Stethoscope,
  Building2,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

import { PDFViewer } from "@/components/pdf/PDFViewer"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/components/ui"
import { useAppDispatch } from "@/store/hooks"
import { logout } from "@/store/slices/authSlice"

const companyProjects = [
  {
    id: 1,
    title: "Time Tracking Software",
    description:
      "Comprehensive time tracking application developed during my tenure at Infinite Open Source Solutions LLP. Features real-time task monitoring, visual timeline representation, and productivity analytics for efficient work hour tracking.",
    icon: Clock,
    company: "Infinite Open Source Solutions LLP",
    period: "December 2022 - July 2023",
    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Table",
      "Tailwind CSS",
      "Chart.js",
    ],
    highlights: [
      "Interactive data tables with sorting and filtering",
      "Dynamic charts and analytics dashboards",
      "Real-time task monitoring",
      "Seamless state management across modules",
      "Database optimization and design",
    ],
    status: "completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Direct Selling Software",
    description:
      "Enterprise-level direct selling platform developed at Infinite Open Source Solutions LLP. Designed to manage sales operations, track commissions, and handle multi-level marketing structures.",
    icon: Briefcase,
    company: "Infinite Open Source Solutions LLP",
    period: "December 2022 - July 2023",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    highlights: [
      "Sales management system",
      "Commission tracking",
      "Multi-level marketing support",
      "Database design and optimization",
      "Real-time updates",
    ],
    status: "completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Customer Onboarding Platform",
    description:
      "Enterprise-level customer onboarding application with sophisticated nine-step wizard interface. Built at Tecbert LLP with Keycloak integration and comprehensive form validation.",
    icon: FileText,
    company: "Tecbert LLP",
    period: "September 2023 - Present",
    tech: [
      "TypeScript",
      "React.js",
      "RTK Query",
      "React Hook Form",
      "Keycloak",
      "shadcn/ui",
    ],
    highlights: [
      "Nine-step wizard interface",
      "Keycloak authentication with RBAC",
      "Complex form validations",
      "State persistence across stages",
      "Performance optimization",
    ],
    status: "completed",
    liveUrl: "#",
    githubUrl: "#",
  },
]

const personalProjects = [
  {
    id: 4,
    title: "Job Portal Platform",
    description:
      "A comprehensive full-stack job portal allowing users to post jobs, apply for positions, and manage applications with seamless authentication and database integration.",
    icon: Globe,
    company: "Personal Project",
    period: "2024",
    tech: ["React", "Supabase", "Clerk", "shadcn/ui", "Tailwind CSS"],
    highlights: [
      "Job posting and application management",
      "Real-time database integration",
      "Seamless authentication",
      "Modern UI with shadcn/ui",
    ],
    status: "active",
    liveUrl: "https://jobportal-silk.vercel.app/",
    githubUrl: "https://github.com/vimal7736/jobportal",
  },
  {
    id: 5,
    title: "Pouncert - Learning Platform",
    description:
      "The Power of Uncertain Creation - A comprehensive learning platform with dedicated sections for Data Analysts and Web Developers. Features practice areas, interactive learning modules, and a Crypto Dashboard for cryptocurrency data visualization and analysis.",
    icon: BookOpen,
    company: "Personal Project",
    period: "2024",
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Learning section for Data Analysts",
      "Learning section for Web Developers",
      "Dev Practice area for hands-on coding",
      "Crypto Dashboard with cryptocurrency scenes",
      "Interactive learning modules",
      "Modern React + Vite setup",
    ],
    status: "active",
    liveUrl: "https://pouncert.vercel.app/",
    githubUrl: "https://github.com/vimal7736/pouncert",
  },
  {
    id: 6,
    title: "Doctor Appointment Booking System",
    description:
      "Full Stack Doctor Appointment Booking System built using MERN Stack. Features patient dashboard for booking appointments, doctor dashboard for managing appointments and tracking earnings, and admin dashboard for system management. Includes integrated online payment gateway for secure appointment fee payments.",
    icon: Stethoscope,
    company: "Personal Project",
    period: "2024",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Payment Gateway",
    ],
    highlights: [
      "Patient registration and appointment booking",
      "Doctor dashboard with earnings tracking",
      "Admin dashboard for system management",
      "Online payment gateway integration",
      "Full MERN stack implementation",
    ],
    status: "active",
    liveUrl: "https://doctor-appointment-bay-nine.vercel.app/",
    githubUrl: "https://github.com/vimal7736/doctor_appointment",
  },
]

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

export default function Projects() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const [showPDFPreview, setShowPDFPreview] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const moreMenuRef = useRef<HTMLDivElement>(null)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  const handleNavigate = (path: string) => {
    navigate(path)
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setIsMoreMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/projects", label: "Projects", icon: Code },
    { path: "/designs", label: "Designs", icon: Palette },
  ]

  return (
    <div className="min-h-screen bg-background">
      {showPDFPreview && (
        <PDFViewer
          pdfUrl="/Vimal_Suresh_T.pdf"
          title="Vimal Suresh T - Resume"
          onClose={() => setShowPDFPreview(false)}
        />
      )}
      <header className="border-b border-border bg-background sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-foreground text-glow flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              My Projects
            </div>
            <div className="flex items-center gap-4">
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="ghost"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-[var(--color-text-muted)] text-glow">
                    Navigate
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-56 bg-[var(--color-bg-secondary)] rounded-lg border border-border shadow-[var(--shadow-raised-lg)] z-50"
                  >
                    <div className="py-2">
                      {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <button
                            key={item.path}
                            onClick={() => handleNavigate(item.path)}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-[var(--color-bg-base)] transition-colors text-left"
                          >
                            <Icon className="w-4 h-4 text-primary" />
                            <span className="text-glow">{item.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    window.open("https://github.com/vimal7736", "_blank")
                  }
                  className="hidden sm:flex"
                  title="GitHub"
                >
                  <Github className="w-4 h-4 text-[var(--color-text-muted)]" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/vimal-suresh-t-6273b0241/",
                      "_blank"
                    )
                  }
                  className="hidden sm:flex"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[var(--color-text-muted)]" />
                </Button>
              </div>

              <div className="relative" ref={moreMenuRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className="flex items-center gap-1"
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>

                {isMoreMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-[var(--color-bg-secondary)] rounded-lg border border-border shadow-[var(--shadow-raised-lg)] z-50"
                  >
                    <div className="py-2">
                      <button
                        onClick={() => {
                          window.open("https://github.com/vimal7736", "_blank")
                          setIsMoreMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-[var(--color-bg-base)] transition-colors text-left"
                      >
                        <Github className="w-4 h-4 text-primary" />
                        <span className="text-glow">GitHub</span>
                        <ExternalLink className="w-3 h-3 ml-auto text-[var(--color-text-muted)]" />
                      </button>
                      <button
                        onClick={() => {
                          window.open(
                            "https://www.linkedin.com/in/vimal-suresh-t-6273b0241/",
                            "_blank"
                          )
                          setIsMoreMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-[var(--color-bg-base)] transition-colors text-left"
                      >
                        <Linkedin className="w-4 h-4 text-primary" />
                        <span className="text-glow">LinkedIn</span>
                        <ExternalLink className="w-3 h-3 ml-auto text-[var(--color-text-muted)]" />
                      </button>
                      <button
                        onClick={() => {
                          window.location.href =
                            "mailto:vimalonboard69@gmail.com"
                          setIsMoreMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-[var(--color-bg-base)] transition-colors text-left"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-glow">Email</span>
                      </button>
                      <div className="border-t border-border my-2" />
                      <button
                        onClick={() => {
                          window.open("tel:+917736173889", "_self")
                          setIsMoreMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-[var(--color-bg-base)] transition-colors text-left"
                      >
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-glow">Call</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowPDFPreview(true)
                          setIsMoreMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-[var(--color-bg-base)] transition-colors text-left"
                      >
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-glow">Preview Resume</span>
                      </button>
                      <button
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = "/Vimal_Suresh_T.pdf"
                          link.download = "Vimal_Suresh_T_Resume.pdf"
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                          setIsMoreMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-[var(--color-bg-base)] transition-colors text-left"
                      >
                        <Download className="w-4 h-4 text-primary" />
                        <span className="text-glow">Download Resume</span>
                      </button>
                      <div className="border-t border-border my-2" />
                      <button
                        onClick={() => {
                          navigate("/")
                          setIsMoreMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-[var(--color-bg-base)] transition-colors text-left"
                      >
                        <Home className="w-4 h-4 text-primary" />
                        <span className="text-glow">Home</span>
                      </button>
                      <button
                        onClick={() => {
                          handleLogout()
                          setIsMoreMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-danger hover:bg-[var(--color-bg-base)] transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4 text-danger" />
                        <span className="text-danger">Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="flex justify-center"
            >
              <Projector className="w-16 h-16 text-primary text-glow" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-glow-strong">
              Project Showcase
            </h1>
          </motion.section>

          {/* Company Projects Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-primary text-glow" />
              <h2 className="text-3xl font-semibold text-foreground text-glow">
                Company Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {companyProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card variant="raised" className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-[var(--color-bg-secondary)]">
                              <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl text-glow">
                                {project.title}
                              </CardTitle>
                              {project.company && (
                                <div className="mt-2 space-y-1">
                                  <p className="text-sm text-[var(--color-text-muted)]">
                                    {project.company}
                                  </p>
                                  {project.period && (
                                    <p className="text-xs text-[var(--color-text-muted)]">
                                      {project.period}
                                    </p>
                                  )}
                                </div>
                              )}
                              <Badge
                                variant={
                                  project.status === "active"
                                    ? "secondary"
                                    : "default"
                                }
                                className="mt-2"
                              >
                                {project.status === "active" ? (
                                  <>
                                    <Zap className="w-3 h-3 mr-1" />
                                    Active
                                  </>
                                ) : (
                                  "Completed"
                                )}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-glow mt-4">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 text-glow flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            Technologies
                          </h4>
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

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 text-glow flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-1">
                            {project.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-[var(--color-text-muted)] flex items-start gap-2"
                              >
                                <span className="text-primary mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-3 pt-4 mt-auto">
                          {project.liveUrl && project.liveUrl !== "#" && (
                            <Button
                              variant="primary"
                              className="flex-1"
                              onClick={() =>
                                window.open(project.liveUrl, "_blank")
                              }
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          )}
                          {project.githubUrl && project.githubUrl !== "#" && (
                            <Button
                              variant="ghost"
                              className="flex-1"
                              onClick={() =>
                                window.open(project.githubUrl, "_blank")
                              }
                            >
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Personal Projects Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <Code className="w-8 h-8 text-primary text-glow" />
              <h2 className="text-3xl font-semibold text-foreground text-glow">
                Personal Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card variant="raised" className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-[var(--color-bg-secondary)]">
                              <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl text-glow">
                                {project.title}
                              </CardTitle>
                              {project.company && (
                                <div className="mt-2 space-y-1">
                                  <p className="text-sm text-[var(--color-text-muted)]">
                                    {project.company}
                                  </p>
                                  {project.period && (
                                    <p className="text-xs text-[var(--color-text-muted)]">
                                      {project.period}
                                    </p>
                                  )}
                                </div>
                              )}
                              <Badge
                                variant={
                                  project.status === "active"
                                    ? "secondary"
                                    : "default"
                                }
                                className="mt-2"
                              >
                                {project.status === "active" ? (
                                  <>
                                    <Zap className="w-3 h-3 mr-1" />
                                    Active
                                  </>
                                ) : (
                                  "Completed"
                                )}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-glow mt-4">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 text-glow flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            Technologies
                          </h4>
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

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 text-glow flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-1">
                            {project.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-[var(--color-text-muted)] flex items-start gap-2"
                              >
                                <span className="text-primary mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-3 pt-4 mt-auto">
                          {project.liveUrl && project.liveUrl !== "#" && (
                            <Button
                              variant="primary"
                              className="flex-1"
                              onClick={() =>
                                window.open(project.liveUrl, "_blank")
                              }
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          )}
                          {project.githubUrl && project.githubUrl !== "#" && (
                            <Button
                              variant="ghost"
                              className="flex-1"
                              onClick={() =>
                                window.open(project.githubUrl, "_blank")
                              }
                            >
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}
