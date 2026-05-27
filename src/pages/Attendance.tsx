import Sidebar from "../components/Sidebar";

export default function Attendance() {
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
              QR Қатысу Жүйесі
            </h1>

            <p className="text-white/50 mt-3 text-lg">
              SmartCampus AI қатысу платформасы
            </p>

          </div>

          <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            QR Сканерлеу
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          {/* QR CARD */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Сабақ QR Коды
            </h2>

            <div className="bg-white rounded-3xl w-[260px] h-[260px] flex items-center justify-center text-black text-2xl font-black">
              QR CODE
            </div>

            <button className="w-full mt-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-[1.02] transition">
              Қатысуды Белгілеу
            </button>

          </div>

          {/* STATUS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Қатысу Статусы
            </h2>

            <div className="space-y-4">

              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">

                <p className="font-bold">
                  Алгоритмдер
                </p>

                <p className="text-green-400 mt-2">
                  Қатысты ✅
                </p>

              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">

                <p className="font-bold">
                  AI Жүйелері
                </p>

                <p className="text-green-400 mt-2">
                  Қатысты ✅
                </p>

              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">

                <p className="font-bold">
                  Деректер Базасы
                </p>

                <p className="text-red-400 mt-2">
                  Қатыспады ❌
                </p>

              </div>

            </div>

          </div>

          {/* AI */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6 text-cyan-300">
              🤖 AI Бақылау
            </h2>

            <div className="space-y-4">

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  Құрылғы Статусы
                </p>

                <p className="text-cyan-300 mt-2">
                  Сенімді Құрылғы
                </p>

              </div>

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  Face ID Тексеру
                </p>

                <p className="text-cyan-300 mt-2">
                  98% Сәйкестік
                </p>

              </div>

              <div className="bg-black/20 rounded-2xl p-4">

                <p className="font-bold">
                  Fake Detection
                </p>

                <p className="text-green-400 mt-2">
                  Жалған қатысу анықталмады
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* HISTORY */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Қатысу Тарихы
          </h2>

          <div className="space-y-4">

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  Алгоритмдер
                </p>

                <p className="text-white/50 mt-2">
                  27 Мамыр 2026
                </p>

              </div>

              <div className="text-green-400 font-bold">
                ҚАТЫСТЫ
              </div>

            </div>

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  AI Жүйелері
                </p>

                <p className="text-white/50 mt-2">
                  26 Мамыр 2026
                </p>

              </div>

              <div className="text-green-400 font-bold">
                ҚАТЫСТЫ
              </div>

            </div>

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  Деректер Базасы
                </p>

                <p className="text-white/50 mt-2">
                  25 Мамыр 2026
                </p>

              </div>

              <div className="text-red-400 font-bold">
                ҚАТЫСПАДЫ
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}