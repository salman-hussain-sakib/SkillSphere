"use client";

import { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Image as ImageIcon, UserPlus, Chrome, ArrowRight, BookOpen } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signUp.email({
        email,
        password,
        name,
        image: image || `https://ui-avatars.com/api/?name=${name}&background=6366f1&color=fff`,
        callbackURL: "/login",
      }, {
        onSuccess: () => {
          toast.success("Account created successfully! Please login.");
          router.push("/login");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Registration failed. Try again.");
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full space-y-8 bg-base-100 p-10 rounded-3xl shadow-2xl border border-base-200 relative z-10"
      >
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6 group">
            <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <BookOpen size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">SkillSphere</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-base-content">Join SkillSphere</h2>
          <p className="mt-2 text-sm text-base-content/60">
            Start your learning journey today.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Full Name</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                <input
                  type="text"
                  required
                  className="input input-bordered w-full pl-12 rounded-xl focus:input-primary"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

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
                <span className="label-text font-bold">Photo URL (Optional)</span>
              </label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                <input
                  type="url"
                  className="input input-bordered w-full pl-12 rounded-xl focus:input-primary"
                  placeholder="https://example.com/photo.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full rounded-xl h-14 text-lg font-bold shadow-lg shadow-primary/20"
          >
            {loading ? <span className="loading loading-spinner"></span> : <><UserPlus size={20} className="mr-2" /> Register</>}
          </button>
        </form>

        <div className="divider text-xs text-base-content/40 uppercase font-bold tracking-widest">Or join with</div>

        <button
          onClick={handleSocialLogin}
          className="btn btn-outline w-full rounded-xl h-14 border-base-300 hover:bg-base-200 hover:text-base-content"
        >
          <Chrome size={20} className="mr-2" /> Google
        </button>

        <p className="text-center text-sm text-base-content/60 pt-4">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-primary hover:underline inline-flex items-center">
            Login here <ArrowRight size={14} className="ml-1" />
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
