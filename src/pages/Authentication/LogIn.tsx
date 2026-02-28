import { useState } from "react";
import img from "../../assets/images/OBJECTS.png";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import type { LoginFormData } from "./type";
import { useForm } from "react-hook-form";
import Button from "../../components/Buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/Store";
import { useAppDispatch } from "../../redux/Hooks";
import { setLoggedInUser, type AuthUser } from "../../redux/authSlice";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { loggedInUser } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginSchema = zod.object({
    email: zod
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: zod
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long and contain at least one letter and one number"
      ),
  });

  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    defaultValues: {},
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    let authUser: AuthUser | null = null;

    if (
      loggedInUser &&
      data.email === loggedInUser.email &&
      data.password === loggedInUser.password
    ) {
      authUser = loggedInUser;
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser) as Partial<AuthUser>;
          if (
            parsedUser.email === data.email &&
            parsedUser.password === data.password
          ) {
            authUser = {
              name: parsedUser.name ?? "",
              email: parsedUser.email,
              password: parsedUser.password,
            } as AuthUser;
          }
        } catch {
          // ignore invalid localStorage data
        }
      }
    }

    if (authUser) {
      dispatch(setLoggedInUser(authUser));
      localStorage.setItem("loggedInUser", JSON.stringify(authUser));
      toast.success("Logged in successfully");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  }

  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <i className="fa-solid fa-right-to-bracket text-primary text-sm" />
              <span className="text-xs font-semibold text-primary">Welcome back</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-1 mb-2">
              Log In
            </h1>
            <p className="text-text-2 text-sm md:text-base">
              Enter your credentials to access your account
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60" />
                <img
                  className="relative object-contain w-full max-w-md drop-shadow-lg"
                  src={img}
                  alt="Objects"
                />
              </div>
              <p className="text-text-2 text-sm mt-4 text-center max-w-xs">
                Shop with ease and security at Byze
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-lg border border-gray-100 p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-1 mb-1.5">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all"
                    placeholder="example@email.com"
                  />
                  {formState.errors.email && formState.touchedFields.email && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-text-1 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50/50 text-text-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-2 hover:text-primary transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-lg`} />
                    </button>
                  </div>
                  {formState.errors.password && formState.touchedFields.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {formState.errors.password?.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button size="md" type="primary" text="Log In" className="w-full" />
                </div>

                <p className="text-center text-sm text-text-2">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    Sign up now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
