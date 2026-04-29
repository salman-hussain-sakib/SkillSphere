"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-base-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold tracking-wide uppercase">Top Rated Learning Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Upgrade Your Skills <br />
              <span className="text-primary">Today 🚀</span>
            </h1>
            <p className="text-lg text-base-content/70 mb-10 max-w-lg leading-relaxed">
              Learn from industry experts and get certified in the most in-demand skills. Join over 10,000+ students already learning on SkillSphere.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/courses" className="btn btn-primary btn-lg rounded-full px-8 group">
                Explore Courses
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn btn-ghost btn-lg rounded-full group">
                <div className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Play size={16} />
                </div>
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="Students learning"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-base-200">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xl font-bold">10k+</p>
                  <p className="text-xs text-base-content/60">Active Students</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
