import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Bot,
  GraduationCap,
  Brain,
} from "lucide-react";

import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden relative">

      {/* TOPBAR */}
      <Topbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 px-8 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-8">

            <Sparkles size={18} />

            AI • Білім • Болашақ

          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight">

            Қазақстандағы

            <span className="text-cyan-400 block">
              AI Университет
            </span>

            Платформасы

          </h1>

          <p className="text-white/60 text-xl mt-8 leading-relaxed max-w-2xl">

            GPA аналитикасы,
            AI көмекші,
            практика жүйесі,
            QR қатысу,
            marketplace —
            барлығы бір smart ecosystem ішінде.

          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <Link
              to="/login"

              className="
                px-8
                py-5
                rounded-3xl
                bg-cyan-400
                text-black
                font-bold
                flex
                items-center
                gap-3
                hover:scale-105
                hover:shadow-2xl
                hover:shadow-cyan-500/30
                transition-all
                duration-300
              "
            >

              Платформаға Кіру

              <ArrowRight size={22} />

            </Link>

            <Link
              to="/assistant"

              className="
                px-8
                py-5
                rounded-3xl
                border
                border-white/10
                hover:bg-white/5
                hover:border-cyan-500/30
                transition-all
                duration-300
              "
            >

              AI Көмекші

            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}

          className="relative"
        >

          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-cyan-500/10 border border-cyan-500/20 p-8">

                <h2 className="text-5xl font-black">
                  3.87
                </h2>

                <p className="text-white/50 mt-3">
                  GPA
                </p>

              </div>

              <div className="rounded-3xl bg-blue-500/10 border border-blue-500/20 p-8">

                <h2 className="text-5xl font-black">
                  94%
                </h2>

                <p className="text-white/50 mt-3">
                  Қатысу
                </p>

              </div>

              <div className="rounded-3xl bg-purple-500/10 border border-purple-500/20 p-8">

                <h2 className="text-5xl font-black">
                  AI
                </h2>

                <p className="text-white/50 mt-3">
                  Көмекші
                </p>

              </div>

              <div className="rounded-3xl bg-green-500/10 border border-green-500/20 p-8">

                <h2 className="text-5xl font-black">
                  12
                </h2>

                <p className="text-white/50 mt-3">
                  Тапсырма
                </p>

              </div>

            </div>

            {/* AI CARD */}
            <div className="mt-8 rounded-3xl bg-black/40 border border-white/10 p-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">

                  <Bot className="text-cyan-300" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    SmartCampus AI
                  </h3>

                  <p className="text-white/50">
                    Интеллектуалды көмекші
                  </p>

                </div>

              </div>

              <div className="mt-6 space-y-4">

                <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-4">
                  GPA анализі аяқталды.
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  Апталық сабақ кестесі жаңартылды.
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-8 pb-24 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300">

            <Brain className="text-cyan-300" size={40} />

            <h3 className="text-3xl font-bold mt-6">
              AI Көмекші
            </h3>

            <p className="text-white/60 mt-4 leading-relaxed">
              AI арқылы оқу,
              GPA,
              productivity
              және career support.
            </p>

          </div>

          <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300">

            <GraduationCap
              className="text-cyan-300"
              size={40}
            />

            <h3 className="text-3xl font-bold mt-6">
              Практика Жүйесі
            </h3>

            <p className="text-white/60 mt-4 leading-relaxed">
              PDF upload,
              AI анализ,
              практика tracking.
            </p>

          </div>

          <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300">

            <Sparkles
              className="text-cyan-300"
              size={40}
            />

            <h3 className="text-3xl font-bold mt-6">
              Marketplace
            </h3>

            <p className="text-white/60 mt-4 leading-relaxed">
              Internship,
              freelance,
              студенттік ecosystem.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}