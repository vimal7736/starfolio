import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import {
  Alert,
  Button,
  Card,
  CardContent,
  CardTitle,
  Checkbox,
  Input,
  TooltipHint,
} from "@/components/ui"
import { loginSchema, type LoginFormData } from "@/schemas/auth/loginSchema"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "@/store/slices/authSlice"

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  })

  const onSubmit = async (data: LoginFormData) => {
    dispatch(loginStart())

    const username = data.email.includes("@")
      ? data.email.split("@")[0]
      : data.email

    try {
      const validCredentials = {
        username: "admin",
        password: "admin123",
      }

      if (
        username === validCredentials.username &&
        data.password === validCredentials.password
      ) {
        const userData = {
          username,
          email: `${username}@portfolio.com`,
        }
        dispatch(loginSuccess(userData))
        navigate("/dashboard")
      } else {
        dispatch(loginFailure("Invalid username or password"))
      }
    } catch {
      dispatch(loginFailure("An error occurred. Please try again."))
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <CardTitle className="text-2xl text-glow">
            ACCESS VIMAL&apos;S PORTFOLIO
          </CardTitle>
        </div>
        <Card variant="raised" className="w-full">
          <CardContent>
            {error && (
              <Alert variant="danger" className="mb-4">
                <div className="font-semibold">Login Failed</div>
                <div className="text-sm">{error}</div>
              </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <TooltipHint username="admin">
                  <div>
                    <Input
                      id="email"
                      type="text"
                      variant="default"
                      placeholder="Enter username or email"
                      {...register("email")}
                      disabled={isLoading || isSubmitting}
                      aria-invalid={errors.email ? "true" : "false"}
                      className={errors.email ? "border-danger" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-danger mt-1" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </TooltipHint>
              </div>

              <div className="space-y-2">
                <TooltipHint password="admin123">
                  <div>
                    <Input
                      id="password"
                      type="password"
                      variant="default"
                      placeholder="Enter your password"
                      {...register("password")}
                      disabled={isLoading || isSubmitting}
                      aria-invalid={errors.password ? "true" : "false"}
                      className={errors.password ? "border-danger" : ""}
                    />
                    {errors.password && (
                      <p className="text-sm text-danger mt-1" role="alert">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </TooltipHint>
              </div>

              <div className="flex items-center justify-between">
                <Controller
                  name="rememberMe"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      variant="default"
                      checked={value || false}
                      onChange={(e) => onChange(e.target.checked)}
                      label="Remember me"
                      disabled={isLoading || isSubmitting}
                    />
                  )}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isLoading || isSubmitting}
              >
                {isLoading || isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[var(--color-text-muted)]">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="text-foreground font-medium hover:underline text-glow"
                >
                  Sign up
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
