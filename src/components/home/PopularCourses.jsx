"use client";

import { courses } from "@/lib/courses";
import { Star, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PopularCourses() {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-24 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🔥 Popular Courses</h2>
            <p className="text-base-content/60 max-w-md">Our most loved courses by thousands of students worldwide.</p>
          </div>
          <Link href="/courses" className="hidden md:flex items-center text-primary font-bold hover:underline">
            View All Courses <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-100 shadow-xl hover-card group"
            >
              <figure className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {course.category}
                </div>
              </figure>
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold text-base-content">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-xs text-base-content/50 space-x-1">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <h3 className="card-title text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-base-content/60 mb-6 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-base-200">
                  <div className="flex items-center space-x-2">
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={`https://i.pravatar.cc/100?img=${course.id + 5}`} alt={course.instructor} />
                      </div>
                    </div>
                    <span className="text-xs font-medium">{course.instructor}</span>
                  </div>
                  <Link href={`/courses/${course.id}`} className="btn btn-primary btn-sm rounded-lg">
                    View Details
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
