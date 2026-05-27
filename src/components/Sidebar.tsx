import {
  LayoutDashboard,
  Bot,
  CalendarCheck,
  Briefcase,
  GraduationCap,
  CalendarDays,
  BriefcaseBusiness,
  BarChart3,
  Building2,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

export default function Sidebar() {

  const location =
    useLocation();

  const menu = [

    {
      name: "Басқару панелі",
      path: "/dashboard",
      icon: (
        <LayoutDashboard size={22} />
      ),
    },

    {
      name: "AI Ассистент",
      path: "/assistant",
      icon: (
        <Bot size={22} />
      ),
    },

    {
      name: "Қатысу",
      path: "/attendance",
      icon: (
        <CalendarCheck size={22} />
      ),
    },

    {
      name: "Практика",
      path: "/practice",
      icon: (
        <GraduationCap size={22} />
      ),
    },

    {
      name: "Сабақ кестесі",
      path: "/schedule",
      icon: (
        <CalendarDays size={22} />
      ),
    },

    {
      name: "GPA Tracker",
      path: "/gpa",
      icon: (
        <BarChart3 size={22} />
      ),
    },

    {
      name: "Marketplace",
      path: "/marketplace",
      icon: (
        <Briefcase size={22} />
      ),
    },

    {
      name: "Тәжірибе",
      path: "/internship",
      icon: (
        <BriefcaseBusiness size={22} />
      ),
    },

{
  name: "Dean Office",
  path: "/dean",
  icon: (
    <Building2 size={22} />
  ),
},

  ];

  return (

    <aside className="w-72 min-h-screen border-r border-white/10 bg-black/40 backdrop-blur-2xl p-6 hidden md:flex flex-col">

      {/* LOGO */}
      <div>

        <h1 className="text-4xl font-black text-white">
          SmartCampus
        </h1>

        <p className="text-cyan-300 mt-2">
          AI Platform
        </p>

      </div>

      {/* MENU */}
      <div className="mt-12 flex flex-col gap-3">

        {menu.map((item) => {

          const active =
            location.pathname ===
            item.path;

          return (

            <Link
              key={item.path}
              to={item.path}

              className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition border ${
                active
                  ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                  : "border-transparent hover:bg-white/5 text-white"
              }`}
            >

              {item.icon}

              <span className="font-medium">
                {item.name}
              </span>

            </Link>

          );
        })}

      </div>

      {/* FOOTER */}
      <div className="mt-auto rounded-3xl bg-cyan-500/10 border border-cyan-500/20 p-5">

        <h2 className="text-xl font-bold text-cyan-300">
          SmartCampus AI
        </h2>

        <p className="text-white/60 text-sm mt-3 leading-relaxed">
          Қазақстандағы AI университет платформасы 🔥
        </p>

      </div>

    </aside>

  );
}