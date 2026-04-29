"use client";

import { courses } from "@/lib/courses";
import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, BadgeCheck } from "lucide-react";

export default function TrendingCourses() {
  const trending = [...courses].reverse().slice(0, 2);

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-12">
          <TrendingUp className="text-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold">Trending Courses</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {trending.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-base-100 rounded-3xl overflow-hidden shadow-xl border border-base-200 group"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                  <BadgeCheck size={16} />
                  <span>Newly Added</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {course.title}
                </h3>
                <p className="text-base-content/60 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-base-content/40 uppercase font-bold tracking-tighter">Instructor</span>
                    <span className="font-bold">{course.instructor}</span>
                  </div>
                  <Link href={`/courses/${course.id}`} className="btn btn-ghost btn-circle hover:bg-primary hover:text-white transition-all">
                    <TrendingUp size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
