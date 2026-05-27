import Sidebar from "../components/Sidebar";

const tasks = [
  {
    title: "AI Жобасы",
    deadline: "29 Мамыр",
    status: "Күтілуде",
  },

  {
    title: "Деректер Базасы Есебі",
    deadline: "1 Маусым",
    status: "Аяқталды",
  },

  {
    title: "UI/UX Презентация",
    deadline: "5 Маусым",
    status: "Орындалуда",
  },
];

export default function GPA() {

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">

      <Sidebar />

      <main className="flex-1 p-10">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black">
              GPA & Тапсырмалар
            </h1>

            <p className="text-white/50 mt-3 text-lg">
              SmartCampus AI өнімділік жүйесі
            </p>

          </div>

          <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold">
            + Тапсырма Қосу
          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-white/50">
              GPA
            </p>

            <h2 className="text-5xl font-black mt-3">
              3.87
            </h2>

            <p className="text-cyan-300 mt-3">
              Өте Жақсы
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-white/50">
              Қатысу
            </p>

            <h2 className="text-5xl font-black mt-3">
              94%
            </h2>

            <p className="text-green-400 mt-3">
              Белсенді
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-white/50">
              Тапсырмалар
            </p>

            <h2 className="text-5xl font-black mt-3">
              3
            </h2>

            <p className="text-orange-400 mt-3">
              Күтілуде
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-white/50">
              Өнімділік
            </p>

            <h2 className="text-5xl font-black mt-3">
              98%
            </h2>

            <p className="text-pink-400 mt-3">
              Жоғары
            </p>

          </div>

        </div>

        {/* TASKS */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            📋 Тапсырмалар
          </h2>

          <div className="space-y-4">

            {tasks.map((task, index) => (

              <div
                key={index}
                className="bg-black/20 rounded-2xl p-5 flex items-center justify-between"
              >

                <div>

                  <p className="font-bold text-lg">
                    {task.title}
                  </p>

                  <p className="text-white/50 mt-2">
                    Deadline: {task.deadline}
                  </p>

                </div>

                <div
                  className={`px-4 py-2 rounded-xl text-sm font-bold ${
                    task.status === "Аяқталды"
                      ? "bg-green-500/20 text-green-400"
                      : task.status === "Күтілуде"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-cyan-500/20 text-cyan-300"
                  }`}
                >
                  {task.status}
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* AI */}
        <div className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-cyan-300">
            🤖 AI Ұсыныс
          </h2>

          <p className="text-white/70 mt-4 text-lg leading-relaxed">

            GPA көрсеткіші өсіп жатыр 🔥

            Бірақ Деректер Базасы пәнінің
            тапсырмаларын уақытында аяқтау ұсынылады.

          </p>

        </div>

      </main>

    </div>
  );
}