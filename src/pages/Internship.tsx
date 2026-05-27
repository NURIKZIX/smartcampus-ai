import Sidebar from "../components/Sidebar";

export default function Internship() {

  const internships = [
    {
      company: "Kaspi.kz",
      role: "Frontend Практикант",
      location: "Алматы",
      salary: "250 000 ₸",
      status: "АШЫҚ",
    },

    {
      company: "Halyk Bank",
      role: "Backend Практикант",
      location: "Астана",
      salary: "300 000 ₸",
      status: "TOP",
    },

    {
      company: "Freedom",
      role: "UI/UX Дизайнер",
      location: "Remote",
      salary: "220 000 ₸",
      status: "NEW",
    },
  ];

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
              Вакансия & Internship
            </h1>

            <p className="text-white/50 mt-3 text-lg">
              SmartCampus AI career платформасы
            </p>

          </div>

          <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            + CV Жүктеу
          </button>

        </div>

        {/* AI MATCH */}
        <div className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-cyan-300">
            🤖 AI Career Match
          </h2>

          <p className="text-white/70 mt-4 leading-relaxed max-w-3xl">

            AI сенің GPA,
            skill және белсенділігіңе қарай
            internship ұсынады 🔥

          </p>

          <div className="flex gap-4 mt-6 flex-wrap">

            <div className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-bold">
              Frontend
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10">
              AI Engineer
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10">
              UI/UX
            </div>

          </div>

        </div>

        {/* INTERNSHIPS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

          {internships.map((job, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-cyan-400/30 transition"
            >

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                  {job.company}
                </h2>

                <div className="px-4 py-2 rounded-xl bg-cyan-400 text-black text-sm font-bold">
                  {job.status}
                </div>

              </div>

              <p className="text-cyan-300 mt-5 text-lg">
                {job.role}
              </p>

              <div className="mt-6 space-y-3 text-white/70">

                <p>
                  📍 {job.location}
                </p>

                <p>
                  💰 {job.salary}
                </p>

                <p>
                  ⏳ Deadline: 15 Маусым
                </p>

              </div>

              <button className="mt-8 w-full py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-[1.02] transition">
                Өтініш Жіберу
              </button>

            </div>

          ))}

        </div>

        {/* RECENT APPLICATIONS */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            📄 Менің Өтініштерім
          </h2>

          <div className="space-y-4">

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  Kaspi.kz — Frontend Практикант
                </p>

                <p className="text-white/50 mt-2">
                  Кеше жіберілді
                </p>

              </div>

              <div className="text-yellow-400 font-bold">
                ҚАРАЛУДА
              </div>

            </div>

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  Freedom — UI/UX
                </p>

                <p className="text-white/50 mt-2">
                  3 күн бұрын жіберілді
                </p>

              </div>

              <div className="text-green-400 font-bold">
                ҚАБЫЛДАНДЫ
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}