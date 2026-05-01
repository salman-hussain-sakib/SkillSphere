"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { User, Mail, Calendar, Edit3, Shield, Book, Award, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200/50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-200"
        >
          <div className="h-48 md:h-56 relative w-full bg-gradient-to-tr from-primary/10 via-base-200 to-secondary/10">
            {/* Subtle CSS-only dot pattern for a modern look */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
            {/* Smooth fade into the card body */}
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-60"></div>
            
            <div className="absolute -bottom-16 left-8 md:left-12 z-10">
              <div className="avatar">
                <div className="w-32 md:w-40 rounded-3xl ring-8 ring-base-100 shadow-2xl bg-base-100">
                  <img
                    src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}&background=6366f1&color=fff`}
                    alt={session.user.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${session.user.name}&background=6366f1&color=fff`;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 pb-12 px-8 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h1 className="text-3xl font-bold mb-2">{session.user.name}</h1>
                <p className="text-base-content/60 flex items-center">
                  <Mail size={16} className="mr-2" /> {session.user.email}
                </p>
              </div>
              <Link href="/profile/update" className="btn btn-primary rounded-xl mt-6 md:mt-0 shadow-lg shadow-primary/20">
                <Edit3 size={18} className="mr-2" /> Update Profile
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-6">
                <div className="bg-base-200/50 p-6 rounded-2xl border border-base-200">
                  <h3 className="font-bold mb-4 flex items-center text-sm uppercase tracking-wider text-base-content/40">
                    <Shield size={16} className="mr-2" /> Account Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60">Status</span>
                      <span className="badge badge-success badge-sm text-white font-bold uppercase text-[10px]">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60">Role</span>
                      <span className="font-bold text-sm">Student</span>
                    </div>
                  </div>
                </div>

                <div className="bg-base-200/50 p-6 rounded-2xl border border-base-200">
                  <h3 className="font-bold mb-4 flex items-center text-sm uppercase tracking-wider text-base-content/40">
                    <Award size={16} className="mr-2" /> Learning Progress
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60">Courses Joined</span>
                      <span className="font-bold">4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60">Completed</span>
                      <span className="font-bold">2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Book size={20} className="mr-3 text-primary" /> Recent Activity
                  </h2>
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center p-4 bg-base-100 border border-base-200 rounded-2xl hover:bg-base-200 transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                          <Clock size={24} />
                        </div>
                        <div className="flex-grow">
                          <p className="font-bold text-sm">Continued learning React Masterclass</p>
                          <p className="text-xs text-base-content/50">2 hours ago</p>
                        </div>
                        <span className="text-xs font-bold text-primary">75% Done</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                  <h2 className="text-xl font-bold mb-4">Start a new journey?</h2>
                  <p className="text-base-content/60 mb-6">Explore our latest courses and expand your skills even further.</p>
                  <Link href="/courses" className="btn btn-primary rounded-xl">Browse Courses</Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
