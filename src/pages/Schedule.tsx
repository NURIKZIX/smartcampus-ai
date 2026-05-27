import Sidebar from "../components/Sidebar";

import {
  motion,
} from "framer-motion";

const lessons = [
  {
    subject: "Алгоритмдер",
    time: "09:00",
    teacher: "Ержан Ағай",
  },

  {
    subject: "AI Жүйелері",
    time: "11:00",
    teacher: "Нұрбек",
  },

  {
    subject: "Деректер Базасы",
    time: "14:00",
    teacher: "Айдана",
  },

  {
    subject: "UI/UX",
    time: "16:00",
    teacher: "Мадина",
  },
];

export default function Schedule() {

  return (
    <div className="min-h-screen bg-[#030712] text-white flex">

      <Sidebar />

      <main className="flex-1 p-10 relative overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10">

          {/* HEADER */}
          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-5xl font-black">
                Сабақ Кестесі
              </h1>

              <p className="text-white/50 mt-3">
                SmartCampus AI кесте жүйесі
              </p>

            </div>

            <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold">
              + Жаңа Сабақ
            </button>

          </div>

          {/* TODAY */}
          <div className="mt-10 rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-8">

            <h2 className="text-3xl font-bold text-cyan-300">
              🔥 Бүгінгі Жоспар
            </h2>

            <p className="text-white/70 mt-4">
              Бүгін 4 сабақ бар.
              1 deadline жақындап қалды.
            </p>

          </div>

          {/* LESSONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            {lessons.map(
              (
                lesson,
                index
              ) => (

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

                  className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:scale-[1.02] transition"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h2 className="text-3xl font-bold">
                        {lesson.subject}
                      </h2>

                      <p className="text-white/50 mt-3">
                        👨‍🏫 {lesson.teacher}
                      </p>

                    </div>

                    <div className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-black text-xl">
                      {lesson.time}
                    </div>

                  </div>

                  <div className="mt-8 flex gap-4">

                    <button className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-bold">
                      Кіру
                    </button>

                    <button className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10">
                      Толығырақ
                    </button>

                  </div>

                </motion.div>
              )
            )}
          </div>

          {/* AI PANEL */}
          <div className="mt-10 rounded-[32px] border border-purple-500/20 bg-purple-500/10 p-8">

            <h2 className="text-3xl font-bold text-purple-300">
              🤖 AI Ұсынысы
            </h2>

            <p className="text-white/70 mt-4 leading-relaxed">

              Сенің schedule бойынша
              ең busy күнің —
              Сәрсенбі.

              AI сенің практика
              уақытыңды кешкі
              18:00-ге ауыстыруды
              ұсынады 🔥

            </p>

          </div>

        </div>

      </main>
    </div>
  );
}