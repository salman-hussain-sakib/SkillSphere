import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="text-center">
        <div className="relative inline-block mb-8">
          <h1 className="text-9xl font-black text-primary opacity-20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search size={80} className="text-primary animate-bounce" />
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4">Oops! Page not found</h2>
        <p className="text-base-content/60 max-w-md mx-auto mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="btn btn-primary rounded-xl px-8">
            <Home size={18} className="mr-2" /> Back to Home
          </Link>
          <Link href="/courses" className="btn btn-outline rounded-xl px-8">
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
