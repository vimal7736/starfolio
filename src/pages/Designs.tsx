import { useEffect, useRef, useState } from "react"

import { motion } from "framer-motion"
import {
  Palette,
  Sparkles,
  Layers,
  Eye,
  CheckCircle,
  ChevronDown,
  Home,
  Code,
  LogOut,
  Github,
  Linkedin,
  Mail,
  Download,
  MoreVertical,
  ExternalLink,
  Phone,
  FileText,
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
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { logout } from "@/store/slices/authSlice"

const designs = [
  {
    id: 1,
    title: "Neumorphic UI Component Library",
    description:
      "A complete neumorphic design system with 40+ reusable components. Features dark theme with blue glow effects, smooth animations, and consistent design language.",
    category: "UI/UX Design",
    image: "🎨",
    features: [
      "40+ neumorphic components",
      "Dark theme with blue glow",
      "Consistent design system",
      "Smooth animations",
      "Accessible components",
    ],
    tech: ["Tailwind CSS", "Framer Motion", "TypeScript", "shadcn/ui"],
  },
  {
    id: 2,
    title: "Landing Page Design",
    description:
      "Modern landing page with animated hero section, floating elements, and engaging call-to-action. Designed with dark theme and green/red accents.",
    category: "Web Design",
    image: "🚀",
    features: [
      "Animated hero section",
      "Floating background elements",
      "Smooth scroll animations",
      "Responsive design",
      "Engaging CTAs",
    ],
    tech: ["React", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Dashboard Interface",
    description:
      "Comprehensive dashboard design featuring data visualization, interactive charts, and organized information architecture. Built for enterprise applications.",
    category: "Dashboard Design",
    image: "📊",
    features: [
      "Data visualization",
      "Interactive charts",
      "Organized layout",
      "Real-time updates",
      "User-friendly navigation",
    ],
    tech: ["React", "Chart.js", "TanStack Table", "Redux Toolkit"],
  },
  {
    id: 4,
    title: "Form Design System",
    description:
      "Beautiful form designs with real-time validation, multi-step wizards, and error handling. Focused on user experience and accessibility.",
    category: "Form Design",
    image: "📝",
    features: [
      "Multi-step wizards",
      "Real-time validation",
      "Error handling",
      "Accessible forms",
      "Smooth transitions",
    ],
    tech: ["React Hook Form", "Yup", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Navigation Systems",
    description:
      "Innovative navigation patterns including floating sidebars, dropdown menus, and smooth scroll navigation. Designed for intuitive user experience.",
    category: "Navigation Design",
    image: "🧭",
    features: [
      "Floating navigation",
      "Smooth scrolling",
      "Icon-based navigation",
      "Active state indicators",
      "Responsive design",
    ],
    tech: ["React", "Framer Motion", "Lucide Icons"],
  },
  {
    id: 6,
    title: "Component Showcase",
    description:
      "Interactive component library showcasing buttons, cards, inputs, and other UI elements with various states and animations.",
    category: "Component Design",
    image: "🧩",
    features: [
      "Interactive components",
      "Multiple variants",
      "Animation states",
      "Hover effects",
      "Accessibility focus",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "CVA"],
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

export default function Designs() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.auth)
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
              <Palette className="w-6 h-6 text-primary" />
              My Designs
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
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="flex justify-center"
            >
              <Sparkles className="w-16 h-16 text-primary text-glow" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-glow-strong">
              Design Portfolio
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              UI/UX designs, component libraries, and design systems created
              with attention to detail
            </p>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card variant="raised" className="h-full flex flex-col group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="text-5xl">{design.image}</div>
                      <Badge variant="secondary" className="text-xs">
                        {design.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-glow">
                      {design.title}
                    </CardTitle>
                    <CardDescription className="text-glow mt-2">
                      {design.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 text-glow flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Features
                      </h4>
                      <ul className="space-y-1">
                        {design.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-[var(--color-text-muted)] flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-2 text-glow flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {design.tech.map((tech) => (
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.section variants={itemVariants} className="text-center py-12">
            <Card variant="inset" className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground text-glow">
                  Design Philosophy
                </h3>
              </div>
              <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
                I focus on creating designs that are not just visually appealing
                but also functional, accessible, and user-friendly. Every design
                decision is made with the user experience in mind, ensuring
                smooth interactions and intuitive navigation.
              </p>
            </Card>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}
