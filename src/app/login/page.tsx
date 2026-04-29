"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, LogIn, Chrome, ArrowRight, BookOpen } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn.email({
        email,
        password,
        callbackURL: callbackUrl,
      }, {
        onSuccess: () => {
          toast.success("Welcome back to SkillSphere!");
          router.push(callbackUrl);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Invalid credentials. Please try again.");
        }
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async () => {
    await signIn.social({
        provider: "google",
        callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-base-100 p-10 rounded-3xl shadow-2xl border border-base-200 relative z-10"
      >
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6 group">
            <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <BookOpen size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">SkillSphere</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-base-content">Login to your account</h2>
          <p className="mt-2 text-sm text-base-content/60">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                <input
                  type="email"
                  required
                  className="input input-bordered w-full pl-12 rounded-xl focus:input-primary"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                <input
                  type="password"
                  required
                  className="input input-bordered w-full pl-12 rounded-xl focus:input-primary"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-xs" id="remember-me" />
              <label htmlFor="remember-me" className="ml-2 block text-xs text-base-content/60">Remember me</label>
            </div>
            <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full rounded-xl h-14 text-lg font-bold shadow-lg shadow-primary/20"
          >
            {loading ? <span className="loading loading-spinner"></span> : <><LogIn size={20} className="mr-2" /> Login</>}
          </button>
        </form>

        <div className="divider text-xs text-base-content/40 uppercase font-bold tracking-widest">Or continue with</div>

        <button
          onClick={handleSocialLogin}
          className="btn btn-outline w-full rounded-xl h-14 border-base-300 hover:bg-base-200 hover:text-base-content"
        >
          <Chrome size={20} className="mr-2" /> Google
        </button>

        <p className="text-center text-sm text-base-content/60 pt-4">
          Don't have an account?{" "}
          <Link href="/register" className="font-bold text-primary hover:underline inline-flex items-center">
            Register here <ArrowRight size={14} className="ml-1" />
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
