"use client";

import { useState, useEffect } from "react";
import { useSession, updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { User, Image as ImageIcon, Save, ArrowLeft, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending) {
      if (!session) {
        router.push("/login");
      } else {
        setName(session.user.name || "");
        setImage(session.user.image || "");
      }
    }
  }, [session, isPending, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser({
        name,
        image,
      }, {
        onSuccess: () => {
          toast.success("Profile updated successfully!");
          router.push("/profile");
          router.refresh();
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Failed to update profile.");
        }
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isPending || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200/50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/profile" className="inline-flex items-center text-base-content/60 hover:text-primary mb-8 transition-colors font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Profile
        </Link>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-base-100 rounded-3xl shadow-xl p-10 border border-base-200"
        >
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Update Profile</h1>
              <p className="text-base-content/60">Keep your information up to date.</p>
            </div>
          </div>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Full Name</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                <input
                  type="text"
                  required
                  className="input input-bordered w-full pl-12 rounded-xl focus:input-primary h-14"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Profile Image URL</span>
              </label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={18} />
                <input
                  type="url"
                  className="input input-bordered w-full pl-12 rounded-xl focus:input-primary h-14"
                  placeholder="https://example.com/photo.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <label className="label">
                <span className="label-text-alt text-base-content/40">Provide a direct link to an image (JPEG, PNG, etc.)</span>
              </label>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full rounded-xl h-14 text-lg font-bold shadow-lg shadow-primary/20"
              >
                {loading ? <span className="loading loading-spinner"></span> : <><Save size={20} className="mr-2" /> Save Changes</>}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
