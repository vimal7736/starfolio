import * as yup from "yup"

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Username or email is required")
    .min(3, "Username must be at least 3 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: yup.boolean().default(false),
})

export type LoginFormData = yup.InferType<typeof loginSchema>

