"use client";

import { Lightbulb, Clock, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function LearningTips() {
  const tips = [
    {
      icon: <Clock className="text-primary" size={28} />,
      title: "Pomodoro Technique",
      description: "Study for 25 minutes, then take a 5-minute break. This keeps your mind fresh and focused."
    },
    {
      icon: <Lightbulb className="text-secondary" size={28} />,
      title: "Active Recall",
      description: "Test yourself on what you just learned instead of just re-reading the material."
    },
    {
      icon: <Target className="text-accent" size={28} />,
      title: "Set Micro-Goals",
      description: "Break down complex topics into small, manageable tasks to avoid feeling overwhelmed."
    },
    {
      icon: <Zap className="text-warning" size={28} />,
      title: "Apply Immediately",
      description: "Try to build something or solve a problem using the new concept within 24 hours."
    }
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">📌 Learning Tips Section</h2>
          <p className="text-base-content/60 max-w-2xl mx-auto">Master any subject faster with these scientifically proven study techniques.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-base-200/50 hover:bg-base-100 hover:shadow-xl transition-all border border-transparent hover:border-base-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
              <p className="text-sm text-base-content/70 leading-relaxed">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
