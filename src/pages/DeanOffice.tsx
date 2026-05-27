import Sidebar from "../components/Sidebar";

const requests = [

  {
    title: "GPA Транскрипт",
    date: "27 Мамыр 2026",
    status: "МАҚҰЛДАНДЫ",
  },

  {
    title: "Жатақхана Өтініші",
    date: "25 Мамыр 2026",
    status: "ҚАРАЛУДА",
  },

  {
    title: "Студент Анықтамасы",
    date: "20 Мамыр 2026",
    status: "АЯҚТАЛДЫ",
  },

];

export default function DeanOffice() {

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
              Онлайн Деканат
            </h1>

            <p className="text-white/50 mt-3 text-lg">
              SmartCampus AI университет әкімшілік жүйесі
            </p>

          </div>

          <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            + Жаңа Өтініш
          </button>

        </div>

        {/* QUICK REQUESTS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition cursor-pointer">

            <div className="text-5xl">
              📄
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Анықтама
            </h2>

            <p className="text-white/50 mt-3">
              Студент анықтамасы
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition cursor-pointer">

            <div className="text-5xl">
              📊
            </div>

            <h2 className="text-2xl font-bold mt-5">
              GPA Есебі
            </h2>

            <p className="text-white/50 mt-3">
              GPA транскрипті
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition cursor-pointer">

            <div className="text-5xl">
              🏠
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Жатақхана
            </h2>

            <p className="text-white/50 mt-3">
              Жатақхана өтініші
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition cursor-pointer">

            <div className="text-5xl">
              ⚖️
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Апелляция
            </h2>

            <p className="text-white/50 mt-3">
              Баға бойынша шағым
            </p>

          </div>

        </div>

        {/* AI HELPER */}
        <div className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-cyan-300">
            🤖 AI Көмекші
          </h2>

          <p className="text-white/70 mt-4 text-lg leading-relaxed">

            AI құжат толтыруға көмектеседі,
            өтініш статустарын бақылайды
            және деканат workflow-ын автоматтандырады 🔥

          </p>

          <button className="mt-6 px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            AI Сұрау
          </button>

        </div>

        {/* REQUEST HISTORY */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            📚 Өтініш Тарихы
          </h2>

          <div className="space-y-4">

            {requests.map((request, index) => (

              <div
                key={index}
                className="bg-black/20 rounded-2xl p-5 flex items-center justify-between"
              >

                <div>

                  <p className="font-bold text-lg">
                    {request.title}
                  </p>

                  <p className="text-white/50 mt-2">
                    {request.date}
                  </p>

                </div>

                <div
                  className={`px-4 py-2 rounded-xl text-sm font-bold ${
                    request.status === "МАҚҰЛДАНДЫ"
                      ? "bg-green-500/20 text-green-400"
                      : request.status === "ҚАРАЛУДА"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-cyan-500/20 text-cyan-300"
                  }`}
                >
                  {request.status}
                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

    </div>
  );
}