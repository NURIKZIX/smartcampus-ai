import Sidebar from "../components/Sidebar";

const services = [

  {
    title: "Frontend Вебсайт",
    author: "Нұрбол",
    price: "45 000 ₸",
    category: "Бағдарламалау",
  },

  {
    title: "UI/UX Дизайн",
    author: "Алина",
    price: "30 000 ₸",
    category: "Дизайн",
  },

  {
    title: "Ағылшын Тілі Мұғалімі",
    author: "Диас",
    price: "15 000 ₸",
    category: "Білім",
  },

  {
    title: "AI Презентация",
    author: "Мадияр",
    price: "20 000 ₸",
    category: "AI",
  },

];

export default function Marketplace() {

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
              Студент Marketplace
            </h1>

            <p className="text-white/50 mt-3 text-lg">
              SmartCampus AI freelance платформасы
            </p>

          </div>

          <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            + Қызмет Қосу
          </button>

        </div>

        {/* FILTERS */}
        <div className="flex gap-4 mt-10 flex-wrap">

          <button className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-bold">
            Барлығы
          </button>

          <button className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
            Бағдарламалау
          </button>

          <button className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
            Дизайн
          </button>

          <button className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
            AI
          </button>

          <button className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
            Білім
          </button>

        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-cyan-400/30 transition"
            >

              <div className="flex items-center justify-between">

                <div className="px-4 py-2 rounded-xl bg-cyan-400 text-black text-sm font-bold">
                  {service.category}
                </div>

                <div className="text-cyan-300 font-bold">
                  TOP
                </div>

              </div>

              <h2 className="text-3xl font-bold mt-6">
                {service.title}
              </h2>

              <p className="text-white/50 mt-3">
                Автор: {service.author}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <div>

                  <p className="text-white/50">
                    Бағасы
                  </p>

                  <h3 className="text-3xl font-black mt-2">
                    {service.price}
                  </h3>

                </div>

                <button className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
                  Байланысу
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* MY SERVICES */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            💼 Менің Қызметтерім
          </h2>

          <div className="space-y-4">

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  PowerPoint Презентация
                </p>

                <p className="text-white/50 mt-2">
                  12 тапсырыс аяқталды
                </p>

              </div>

              <div className="text-green-400 font-bold">
                БЕЛСЕНДІ
              </div>

            </div>

            <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <p className="font-bold">
                  AI Вебсайт Жасау
                </p>

                <p className="text-white/50 mt-2">
                  4 белсенді клиент
                </p>

              </div>

              <div className="text-cyan-300 font-bold">
                ТРЕНДТЕ
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}