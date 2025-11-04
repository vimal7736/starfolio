import { useState } from "react"

import { motion } from "framer-motion"
import {
  Bell,
  CheckCircle,
  FileText,
  GitBranch,
  Globe,
  Hand,
  HardDrive,
  Layout,
  Monitor,
  Package,
  Plug,
  Rocket,
  Settings,
  Shield,
  Wrench,
  Atom,
  Route,
} from "lucide-react"

import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tooltip,
} from "@/components/ui"

const flows = [
  {
    id: "bootstrap",
    title: "Application Bootstrap",
    steps: [
      { name: "root.tsx", type: "entry", description: "Entry Point" },
      {
        name: "MSW Start",
        type: "process",
        description: "Mock Service Worker",
      },
      {
        name: "GlobalProvider",
        type: "provider",
        description: "Redux + Toast",
      },
      { name: "App.tsx", type: "component", description: "Router Setup" },
      { name: "Routes", type: "routing", description: "Public/Protected" },
    ],
    color: "text-primary",
    detailedDescription: `The Application Bootstrap flow represents the complete initialization sequence that occurs when the React application first loads. It begins with root.tsx serving as the entry point where ReactDOM renders the application into the DOM. In development mode, Mock Service Worker (MSW) is automatically initialized to intercept HTTP requests and provide mock API responses, enabling frontend development without backend dependencies. The GlobalProvider component then wraps the entire application, establishing the Redux store for centralized state management and configuring toast notification systems for user feedback. App.tsx initializes React Router DOM for client-side navigation, setting up the routing infrastructure. Finally, the route configuration is loaded, separating public routes (accessible without authentication) from protected routes (requiring user authentication), establishing the foundation for secure navigation throughout the application.`,
  },
  {
    id: "routing",
    title: "Routing System",
    steps: [
      {
        name: "User Navigation",
        type: "action",
        description: "/customer/onboarding",
      },
      { name: "ProtectedRoute", type: "guard", description: "Auth Check" },
      { name: "MainLayout", type: "layout", description: "Header + Sidebar" },
      { name: "Page Component", type: "page", description: "Onboarding Page" },
    ],
    color: "text-info",
    detailedDescription: `The Routing System flow demonstrates how user navigation is handled with authentication guards and consistent UI layouts. When a user attempts to navigate to a protected route such as /customer/onboarding, the routing system first intercepts the navigation request. The ProtectedRoute component acts as a guard, checking if the user is authenticated by verifying the presence of a valid JWT token in Redux state or localStorage. If authentication is successful, the MainLayout component is rendered, providing a consistent user interface structure including the application header with user information, a sidebar navigation menu, and the main content area. If authentication fails, the user is automatically redirected to the login page. Once authenticated and the layout is established, the specific Page Component (such as the Onboarding Page) is rendered within the layout, completing the navigation process and displaying the requested content to the user.`,
  },
  {
    id: "state",
    title: "State Management Flow",
    steps: [
      {
        name: "Component",
        type: "component",
        description: "useGetBasicInfoQuery",
      },
      { name: "RTK Query Hook", type: "hook", description: "Automatic Cache" },
      { name: "API Endpoint", type: "api", description: "basicApiService" },
      { name: "Base Query", type: "service", description: "axiosBaseQuery" },
      { name: "Axios Instance", type: "service", description: "Interceptors" },
      { name: "Backend API", type: "external", description: "REST API" },
      {
        name: "Response Transform",
        type: "process",
        description: "Data Transform",
      },
      { name: "Cache Update", type: "cache", description: "Redux Store" },
      {
        name: "Re-render",
        type: "component",
        description: "Component Updates",
      },
    ],
    color: "text-success",
    detailedDescription: `**State Management Flow - Step by Step:**

**1. Component Calls RTK Query Hook**
When a React component needs data, it calls an RTK Query hook like \`useGetBasicInfoQuery()\`. This hook is generated from your API slice definition and provides \`{ data, isLoading, error, refetch }\` automatically.

**2. RTK Query Hook Checks Cache**
RTK Query first checks its internal cache (stored in Redux store) to see if data for this endpoint already exists. If cached data is fresh (within the specified time), it returns immediately without making an API call.

**3. API Endpoint Configuration**
If cache is empty or stale, RTK Query looks up the endpoint definition (like \`basicApiService\`) which specifies:
- HTTP method (GET, POST, etc.)
- URL path
- Cache tags for invalidation
- Transformation functions

**4. Base Query Layer (axiosBaseQuery)**
The endpoint configuration uses a base query function (\`axiosBaseQuery\`) that wraps Axios. This base query:
- Prepares the request configuration
- Handles request/response transformation
- Manages error formatting

**5. Axios Instance with Interceptors**
The base query uses a configured Axios instance that has interceptors:

**Request Interceptor:**
- Automatically adds JWT token to Authorization header
- Transforms request data (camelCase → snake_case if needed)
- Adds common headers (Content-Type, etc.)

**Response Interceptor:**
- Handles token refresh if 401 error occurs
- Transforms response data (snake_case → camelCase)
- Handles common error responses

**6. HTTP Request to Backend**
Axios makes the actual HTTP request to your backend REST API. The request includes:
- URL with query parameters
- Request body (for POST/PUT)
- Headers (including auth token)

**7. Backend API Processing**
The backend processes the request, queries the database, and returns a JSON response.

**8. Response Transformation**
The response interceptor transforms the data:
- Converts snake_case keys to camelCase
- Applies type transformations
- Normalizes nested data structures

**9. Cache Update in Redux Store**
RTK Query automatically stores the transformed data in its cache within the Redux store. This cache is keyed by:
- Endpoint name
- Query parameters
- Cache tags for invalidation

**10. Component Re-renders**
Once data is cached, RTK Query updates its internal state. React detects the state change and automatically re-renders your component with the new \`data\` from the hook. The component receives:
- \`data\`: The fetched data
- \`isLoading\`: false (loading complete)
- \`error\`: undefined (if successful)

**Benefits:**
- Automatic caching prevents duplicate API calls
- Loading states managed automatically
- Error handling built-in
- Optimistic updates for mutations
- Cache invalidation with tags
- Background refetching for stale data`,
  },
  {
    id: "forms",
    title: "Form Handling Flow",
    steps: [
      { name: "useForm Hook", type: "hook", description: "React Hook Form" },
      {
        name: "Yup Validation",
        type: "validation",
        description: "Schema Check",
      },
      {
        name: "Field Register",
        type: "process",
        description: "Input Registration",
      },
      {
        name: "Real-time Validate",
        type: "validation",
        description: "onChange Mode",
      },
      { name: "Form Submit", type: "action", description: "Handle Submit" },
      { name: "RTK Mutation", type: "api", description: "Submit Data" },
      {
        name: "Success/Error",
        type: "feedback",
        description: "Toast Notification",
      },
    ],
    color: "text-warning",
    detailedDescription: `The Form Handling Flow demonstrates the complete lifecycle of form management, validation, submission, and user feedback using React Hook Form and Yup validation schemas, ensuring optimal performance and excellent user experience. The process begins when a form component initializes the useForm hook from React Hook Form, which creates a form instance with methods for registering fields, handling submissions, and accessing form state. A Yup validation schema is then configured, defining comprehensive validation rules for each form field including required fields, data types, minimum/maximum lengths, email formats, password complexity, and custom validation logic. Each input field is registered with the useForm hook using the register method, which connects the input to React Hook Form's state management system, enabling the library to track field values, errors, and touched states without causing unnecessary re-renders. As users interact with the form, real-time validation occurs in onChange mode, where field values are validated against the Yup schema immediately upon user input, providing instant feedback about validation errors without waiting for form submission. When the user submits the form, the handleSubmit function wraps the form's submission handler, automatically preventing default form submission behavior and validating all fields according to the Yup schema. If validation passes, the form data is submitted through an RTK Query mutation hook, which handles the API call, transforms the data format if necessary, and manages the submission lifecycle including loading states. Upon successful submission or if an error occurs, appropriate feedback is displayed to the user through toast notifications, providing clear information about the operation's result. This entire flow benefits from React Hook Form's performance optimizations, which minimize re-renders by using uncontrolled components and only updating specific field states, resulting in fast and responsive forms even with complex validation rules and large form datasets.`,
  },
]

const FlowVisualization = ({
  flow,
  isActive,
}: {
  flow: (typeof flows)[0]
  isActive: boolean
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${flow.color} text-glow`}>
          {flow.title}
        </h3>
        <Badge variant="secondary" className="text-xs">
          {flow.steps.length} steps
        </Badge>
      </div>

      <div className="relative">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {flow.steps.map((step, index) => {
            const getStepIcon = () => {
              switch (step.type) {
                case "entry":
                  return Rocket
                case "process":
                  return Settings
                case "provider":
                  return Plug
                case "component":
                  return Atom
                case "routing":
                  return Route
                case "action":
                  return Hand
                case "guard":
                  return Shield
                case "layout":
                  return Layout
                case "page":
                  return FileText
                case "hook":
                  return GitBranch
                case "api":
                  return Globe
                case "service":
                  return Wrench
                case "external":
                  return Monitor
                case "cache":
                  return HardDrive
                case "validation":
                  return CheckCircle
                case "feedback":
                  return Bell
                default:
                  return Package
              }
            }

            const IconComponent = getStepIcon()

            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isActive
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: [0, -5, 0],
                        }
                      : { opacity: 0.3, scale: 0.8 }
                  }
                  transition={{
                    delay: index * 0.3,
                    duration: 0.5,
                    y: {
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.3,
                    },
                  }}
                  className="relative"
                >
                  <div
                    className={`w-20 h-20 rounded-lg flex flex-col items-center justify-center gap-1 border-2 ${
                      isActive
                        ? "border-primary bg-[var(--color-bg-secondary)] shadow-lg"
                        : "border-border bg-[var(--color-bg-secondary)] opacity-30"
                    } transition-all`}
                  >
                    <IconComponent className="w-6 h-6 text-primary" />
                    <span className="text-xs font-mono text-center px-1 text-[var(--color-text-muted)]">
                      {step.name}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.3,
                      }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary"
                    />
                  )}
                </motion.div>

                {index < flow.steps.length - 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={
                      isActive
                        ? {
                            width: "40px",
                            opacity: 1,
                          }
                        : { width: 0, opacity: 0 }
                    }
                    transition={{
                      delay: index * 0.3 + 0.2,
                      duration: 0.5,
                    }}
                    className="h-0.5 bg-primary relative"
                  >
                    <motion.div
                      animate={
                        isActive
                          ? {
                              x: ["-100%", "100%"],
                              opacity: [1, 0],
                            }
                          : {}
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: index * 0.3 + 0.5,
                      }}
                      className="absolute top-0 left-0 w-full h-full bg-primary rounded-full"
                    />
                    <motion.div
                      animate={
                        isActive
                          ? {
                              x: ["-100%", "100%"],
                            }
                          : {}
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: index * 0.3 + 0.5,
                      }}
                      className="absolute top-1/2 left-0 w-2 h-2 -translate-y-1/2 bg-primary rounded-full"
                    />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: flow.steps.length * 0.3 }}
            className="mt-4 p-3 bg-[var(--color-bg-secondary)] rounded-lg border border-border"
          >
            <p className="text-xs text-[var(--color-text-muted)] text-center">
              {flow.steps.map((s) => s.name).join(" → ")}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export function ProjectFlowDiagram() {
  const [activeFlow, setActiveFlow] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-6"
    >
      <Card variant="raised" className="p-8">
        <CardHeader>
          <CardTitle className="text-2xl text-glow">
            How The Project Works - Animated Flow
          </CardTitle>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Click on any flow to see the animated process. Each flow
            demonstrates a different aspect of the application architecture.
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          {flows.map((flow) => (
            <motion.div
              key={flow.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: flows.indexOf(flow) * 0.2 }}
            >
              <Tooltip
                content={
                  <div className="max-w-md space-y-2">
                    <div className="font-semibold text-foreground text-glow mb-2">
                      {flow.title} - Detailed Explanation
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {flow.detailedDescription}
                    </p>
                  </div>
                }
                className="max-w-lg"
              >
                <Card
                  variant="inset"
                  className={`p-6 cursor-pointer transition-all ${
                    activeFlow === flow.id
                      ? "border-2 border-primary"
                      : "border border-border"
                  }`}
                  onClick={() =>
                    setActiveFlow(activeFlow === flow.id ? null : flow.id)
                  }
                >
                  <FlowVisualization
                    flow={flow}
                    isActive={activeFlow === flow.id}
                  />
                </Card>
              </Tooltip>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card variant="raised" className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-glow">
              Key Highlights
            </h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong>Bootstrap:</strong> MSW starts in development,
                  GlobalProvider wraps app with Redux + Toast
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong>Routing:</strong> Protected routes require
                  authentication, MainLayout provides consistent UI
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-glow">
              Technical Flow
            </h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong>State Management:</strong> RTK Query automatically
                  handles caching, loading states, and API calls
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong>Forms:</strong> React Hook Form + Yup provides
                  real-time validation with minimal re-renders
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
