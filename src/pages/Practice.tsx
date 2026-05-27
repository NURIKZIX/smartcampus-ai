import Sidebar from "../components/Sidebar";

export default function Practice() {

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-10">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black">
              Digital Practice System
            </h1>

            <p className="text-white/50 mt-3 text-lg">
              SmartCampus AI практика платформасы
            </p>

          </div>

          <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            + Есеп Жүктеу
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

          {/* UPLOAD */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              📄 Практика Жүктеу
            </h2>

            <div className="border-2 border-dashed border-cyan-500/30 rounded-3xl p-10 text-center">

              <p className="text-6xl">
                📁
              </p>

              <p className="mt-5 text-xl font-semibold">
                PDF / DOCX Жүктеу
              </p>

              <p className="text-white/50 mt-2">
                Практика есебін жүктеу
              </p>

              <button className="mt-6 px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold">
                Файл Таңдау
              </button>

            </div>

          </div>

          {/* AI ANALYZE */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6 text-cyan-300">
              🤖 AI Анализ
            </h2>

            <div className="space-y-4">

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  Грамматика Бағасы
                </p>

                <p className="text-cyan-300 mt-2">
                  94%
                </p>

              </div>

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  Есеп Сапасы
                </p>

                <p className="text-green-400 mt-2">
                  Өте Жақсы
                </p>

              </div>

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  AI Ұсыныс
                </p>

                <p className="text-white/70 mt-2 leading-relaxed">
                  Қорытынды бөлімін кеңейту ұсынылады.
                </p>

              </div>

            </div>

          </div>

          {/* STATUS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              📊 Практика Статусы
            </h2>

            <div className="space-y-5">

              <div>

                <div className="flex items-center justify-between mb-2">

                  <p>
                    Прогресс
                  </p>

                  <p className="text-cyan-300">
                    78%
                  </p>

                </div>

                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">

                  <div className="w-[78%] h-full bg-cyan-400 rounded-full" />

                </div>

              </div>

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  Компания
                </p>

                <p className="text-white/60 mt-2">
                  Smart Solutions LLP
                </p>

              </div>

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  Жетекші
                </p>

                <p className="text-white/60 mt-2">
                  Ержан Ағай
                </p>

              </div>

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  Deadline
                </p>

                <p className="text-red-400 mt-2">
                  12 Маусым 2026
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RECENT REPORTS */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            📚 Соңғы Есептер
          </h2>

          <div className="space-y-4">

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  practice_report_v1.pdf
                </p>

                <p className="text-white/50 mt-2">
                  2 күн бұрын жүктелді
                </p>

              </div>

              <div className="text-green-400 font-bold">
                АНАЛИЗ АЯҚТАЛДЫ
              </div>

            </div>

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  internship_final.docx
                </p>

                <p className="text-white/50 mt-2">
                  Кеше жүктелді
                </p>

              </div>

              <div className="text-cyan-300 font-bold">
                ҚАРАЛУДА
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}