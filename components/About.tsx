import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-darkPrimary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            From Self-Taught Developer to Full-Stack Web Developer
          </h2>

          <div className="space-y-4 text-slate-600 dark:text-white/80 text-lg leading-relaxed">
            <p>
              My journey in web development began with a strong interest in
              building modern and user-friendly web applications. I completed
              Programming Hero's Complete Web Development course in 2022, where
              I built a solid foundation in frontend development and modern web
              technologies.
            </p>
            <p>
              Since then, I have continued developing my skills through hands-on
              projects. I work with React, Next.js, TypeScript, Tailwind CSS,
              and Redux on the frontend, while currently expanding my backend
              expertise with Node.js, Express.js, PostgreSQL, Prisma, REST APIs,
              JWT, Zod, and Stripe.
            </p>
            <p>
              My goal is to become a professional full-stack developer who can
              build meaningful, scalable web applications, solve real-world
              problems, and continue growing through practical experience.
            </p>
          </div>

          {/* Info Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
              <h4 className="font-bold text-slate-900 dark:text-darkHighlight mb-1">
                Location
              </h4>

              <p className="text-slate-600 dark:text-white/70 text-sm">
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
              <h4 className="font-bold text-slate-900 dark:text-darkHighlight mb-1">
                Courses
              </h4>

              <p className="text-slate-600 dark:text-white/70 text-sm">
                Programming Hero, BD — 2022
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-slate-100 dark:bg-white/5 overflow-hidden shadow-2xl">
            <img
              src="https://i.ibb.co/pjQQfTzj/Whats-App-Image-2026-02-04-at-5-37-13-PM.jpg"
              alt="Md. Jahirul Islam Tuku"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-indigo-600 dark:bg-darkLinkActive text-white p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="text-3xl font-bold">4+</p>

            <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
              Years Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
