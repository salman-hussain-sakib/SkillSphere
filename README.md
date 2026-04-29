# 🎓 SkillSphere – Online Learning Platform

SkillSphere is a modern, premium online learning platform where users can explore industry-leading courses, manage their profiles, and enhance their skills. Built with a focus on clean UI/UX, responsiveness, and secure authentication.

## 🚀 Live URL
[SkillSphere - Live Preview](https://skillsphere-learning.vercel.app) *(Placeholder)*

## ✨ Key Features
- **Modern UI/UX**: Clean, smooth, and premium design using DaisyUI and Framer Motion.
- **Full Responsiveness**: Optimized for Mobile, Tablet, and Desktop.
- **Authentication**: Secure Login/Register system powered by BetterAuth (Email/Password & Google).
- **Course Exploration**: All Courses page with real-time search functionality.
- **Protected Routes**: Course details are only accessible to logged-in users.
- **Profile Management**: Users can view and update their profile information (Name & Image).
- **Extra Sections**: Trending courses, Learning tips, and Top Instructors sections on the Home page.
- **Toast Notifications**: Interactive feedback for all user actions.

## 🛠️ Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [DaisyUI](https://daisyui.com/)
- **Authentication**: [BetterAuth](https://better-auth.com/)
- **Database**: [SQLite (Better-SQLite3)](https://github.com/WiseLibs/better-sqlite3)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📦 NPM Packages Used
- `better-auth`
- `daisyui`
- `framer-motion`
- `lucide-react`
- `react-hot-toast`
- `better-sqlite3`
- `clsx`
- `tailwind-merge`

## ⚙️ Environment Variables
Create a `.env.local` file with the following:
```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🛠️ How to Run
1. Clone the repository.
2. Run `npm install`.
3. Set up `.env.local`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

---
Developed with ❤️ for SkillSphere Learners.
