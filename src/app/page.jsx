import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import LearningTips from "@/components/home/LearningTips";
import TopInstructors from "@/components/home/TopInstructors";
import TrendingCourses from "@/components/home/TrendingCourses";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </div>
  );
}
