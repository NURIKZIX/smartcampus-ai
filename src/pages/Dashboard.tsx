import Sidebar from "../components/Sidebar";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

import {
  motion,
} from "framer-motion";

import {
  useTranslation,
} from "react-i18next";

const data = [
  {
    month: "Қаң",
    gpa: 3.1,
  },

  {
    month: "Ақп",
    gpa: 3.3,
  },

  {
    month: "Нау",
    gpa: 3.5,
  },

  {
    month: "Сәу",
    gpa: 3.7,
  },

  {
    month: "Мам",
    gpa: 3.9,
  },
];

export default function Dashboard() {

  const { i18n } =
    useTranslation();

  return (
    <div className="min-h-screen bg-[#030712] text-white flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-10 relative overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10">

          {/* HEADER */}
          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-5xl font-black">
                Басқару панелі
              </h1>

              <p className="text-white/50 mt-3 text-lg">
                SmartCampus AI аналитика жүйесі
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              {/* LANG */}
              <button
                onClick={() =>
                  i18n.changeLanguage("kz")
                }
                className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-bold"
              >
                KZ
              </button>

              <button
                onClick={() =>
                  i18n.changeLanguage("ru")
                }
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition"
              >
                RU
              </button>

              <button
                onClick={() =>
                  i18n.changeLanguage("en")
                }
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition"
              >
                EN
              </button>

              {/* BUTTON */}
              <button className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-bold">
                Premium
              </button>

              <button className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10">
                Экспорт
              </button>

            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

            {[
              {
                title: "GPA",
                value: "3.87",
              },

              {
                title: "Қатысу",
                value: "94%",
              },

              {
                title: "Тапсырмалар",
                value: "12",
              },

              {
                title: "AI Бағасы",
                value: "98%",
              },
            ].map((card, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay:
                    index * 0.1,
                }}

                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:scale-[1.02] transition"
              >

                <p className="text-white/50">
                  {card.title}
                </p>

                <h2 className="text-5xl font-black mt-4">
                  {card.value}
                </h2>

              </motion.div>
            ))}
          </div>

          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">

            {[
              "🤖 AI Ассистент",
              "📄 Практика жүктеу",
              "📈 GPA Анализі",
              "💼 Тәжірибе",
              "📅 Сабақ кестесі",
            ].map((item, index) => (

              <button
                key={index}

                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:scale-105 hover:border-cyan-400/30 transition text-left"
              >

                <p className="font-semibold">
                  {item}
                </p>

                <p className="text-white/40 text-sm mt-2">
                  Модульді ашу
                </p>

              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

            {/* CHART */}
            <div className="xl:col-span-2 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-3xl font-bold">
                    GPA Аналитикасы
                  </h2>

                  <p className="text-white/50 mt-2">
                    Семестр көрсеткіші
                  </p>

                </div>

                <div className="px-4 py-2 rounded-2xl bg-cyan-400 text-black font-bold">
                  +12%
                </div>

              </div>

              <div className="h-[350px] mt-10">

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <LineChart
                    data={data}
                  >

                    <XAxis
                      dataKey="month"
                    />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="gpa"
                      stroke="#22d3ee"
                      strokeWidth={4}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* TODAY */}
              <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

                <h2 className="text-3xl font-bold">
                  Бүгін
                </h2>

                <div className="space-y-5 mt-8">

                  {[
                    "Алгоритмдер",
                    "AI Жүйелері",
                    "Деректер базасы",
                    "Интерфейс дизайны",
                  ].map(
                    (
                      lesson,
                      index
                    ) => (

                      <div
                        key={index}

                        className="flex items-center justify-between rounded-2xl bg-black/20 p-4 border border-white/5"
                      >

                        <div>

                          <p className="font-semibold">
                            {lesson}
                          </p>

                          <p className="text-white/40 text-sm mt-1">
                            09:00
                          </p>

                        </div>

                        <div className="w-3 h-3 rounded-full bg-cyan-400" />

                      </div>
                    )
                  )}
                </div>
              </div>

              {/* AI */}
              <div className="rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-8">

                <h2 className="text-2xl font-bold text-cyan-300">
                  AI Ұсынысы
                </h2>

                <p className="text-white/70 mt-4 leading-relaxed">

                  GPA көрсеткіші өсіп жатыр 🔥

                  Бірақ қатысу деңгейін
                  төмендетпеу үшін
                  Алгоритмдер пәніне
                  көбірек көңіл бөл.

                </p>

                <button className="mt-6 px-5 py-3 rounded-2xl bg-cyan-400 text-black font-bold">
                  Ассистентті ашу
                </button>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}