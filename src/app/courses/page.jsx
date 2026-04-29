"use client";

import { courses } from "@/lib/courses";
import { Search, Star, BookOpen } from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AllCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map(c => c.category))];

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore All Courses</h1>
          <p className="text-base-content/60">Find the perfect course to advance your career.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" size={20} />
            <input
              type="text"
              placeholder="Search courses by title..."
              className="input input-bordered w-full pl-12 h-14 rounded-2xl focus:input-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-md rounded-2xl whitespace-nowrap ${
                  selectedCategory === cat ? "btn-primary" : "btn-ghost bg-base-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="card bg-base-100 shadow-xl border border-base-200 hover-card group"
                >
                  <figure className="relative h-48 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {course.category}
                    </div>
                  </figure>
                  <div className="card-body p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-bold text-base-content">{course.rating}</span>
                      </div>
                      <div className="badge badge-outline badge-sm text-xs opacity-60">{course.level}</div>
                    </div>
                    <h3 className="card-title text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-base-content/60 mb-6 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-100">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-base-content/40 uppercase font-bold tracking-wider">Instructor</span>
                        <span className="text-sm font-semibold">{course.instructor}</span>
                      </div>
                      <Link href={`/courses/${course.id}`} className="btn btn-primary btn-sm rounded-xl">
                        Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="bg-base-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-base-content/30">
                  <BookOpen size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">No courses found</h3>
                <p className="text-base-content/60">Try adjusting your search or filters.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
