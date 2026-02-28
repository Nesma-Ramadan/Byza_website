import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Buttons/Button";
import img from "./../../assets/images/OBJECTS.png";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import type { RegisterFormData } from "./type";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/Hooks";
import { toast } from "react-hot-toast";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const registerSchema = zod
    .object({
      name: zod
        .string()
        .nonempty("Name is required")
        .min(3, "Name must be at least 3 characters long")
        .max(50, "Name must be less than 50 characters long"),
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
      repassword: zod
        .string()
        .nonempty("Re-password is required")
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must be at least 8 characters long and contain at least one letter and one number"
        ),
    })
    .refine((data) => data.password === data.repassword, {
      message: "Passwords don't match",
      path: ["repassword"],
    });

  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    defaultValues: {},
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: RegisterFormData) {
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(userRegister(data));
    toast.success("Registered successfully, you can login now");
    navigate("/login");
  }

  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 mb-4">
              <i className="fa-solid fa-user-plus text-secondary text-sm" />
              <span className="text-xs font-semibold text-secondary">Join us</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-1 mb-2">
              Create Account
            </h1>
            <p className="text-text-2 text-sm md:text-base">
              Join us and start shopping with ease
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 hidden lg:flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />
                <img
                  className="relative object-contain w-full max-w-md drop-shadow-lg"
                  src={img}
                  alt="Objects"
                />
              </div>
              <p className="text-text-2 text-sm mt-4 text-center max-w-xs">
                Discover thousands of products at competitive prices
              </p>
            </div>

            <div className="order-1 lg:order-2 rounded-2xl bg-white shadow-lg border border-gray-100 p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-text-1 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary transition-all"
                    placeholder="Enter your full name"
                  />
                  {formState.errors.name && formState.touchedFields.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-1 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-text-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary transition-all"
                    placeholder="example@email.com"
                  />
                  {formState.errors.email && formState.touchedFields.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-text-1 mb-1.5"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50/50 text-text-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-2 hover:text-secondary transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-lg`} />
                    </button>
                  </div>
                  {formState.errors.password &&
                    formState.touchedFields.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {formState.errors.password?.message}
                      </p>
                    )}
                </div>

                <div>
                  <label
                    htmlFor="repassword"
                    className="block text-sm font-semibold text-text-1 mb-1.5"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("repassword")}
                      type={showRePassword ? "text" : "password"}
                      id="repassword"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50/50 text-text-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRePassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-2 hover:text-secondary transition-colors"
                      aria-label={showRePassword ? "Hide password" : "Show password"}
                    >
                      <i className={`fa-solid ${showRePassword ? "fa-eye-slash" : "fa-eye"} text-lg`} />
                    </button>
                  </div>
                  {formState.errors.repassword &&
                    formState.touchedFields.repassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {formState.errors.repassword?.message}
                      </p>
                    )}
                </div>

                <div className="pt-2">
                  <Button
                    size="md"
                    type="primary"
                    text="Create Account"
                    className="w-full"
                  />
                </div>

                <p className="text-center text-sm text-text-2">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    Log in
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
