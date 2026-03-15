import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-darkPrimary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
            From Travel Logistics to Tech Excellence
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-white/80 text-lg leading-relaxed">
            <p>
              My journey began in Bangladesh, but today I find myself in the
              historic city of Madinah, Saudi Arabia. For the last two years, I
              have embarked on a deep-dive journey into the world of web
              development.
            </p>
            <p>
              While I currently serve as a Ticketing Officer for a travel
              agency, my heart lies in the lines of code I write for at least 4
              hours every single day. I am a self-taught enthusiast who turned
              professional after completing the "Complete Web Development"
              course from Programming Hero.
            </p>
            <p>
              My goal is simple: To transition into a full-time career where I
              can contribute to meaningful, real-world projects. I am ready,
              motivated, and equipped with the modern tools necessary to build
              scalable web applications.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
              <h4 className="font-bold text-slate-900 dark:text-darkHighlight mb-1">
                Location
              </h4>
              <p className="text-slate-600 dark:text-white/70 text-sm">
                Madinah, Saudi Arabia
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
              <h4 className="font-bold text-slate-900 dark:text-darkHighlight mb-1">
                Courses
              </h4>
              <p className="text-slate-600 dark:text-white/70 text-sm">
                Programming Hero (2022)
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-slate-100 dark:bg-white/5 overflow-hidden shadow-2xl">
            <img
              src="https://i.ibb.co/pjQQfTzj/Whats-App-Image-2026-02-04-at-5-37-13-PM.jpg"
              alt="Md. Jahirul Islam Tuku"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-indigo-600 dark:bg-darkLinkActive text-white p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="text-3xl font-bold">2+</p>
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
