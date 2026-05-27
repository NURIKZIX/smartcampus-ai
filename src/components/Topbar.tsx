import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        sticky
        top-0
        z-50
        backdrop-blur-2xl
        bg-[#030712]/70
        border-b
        border-cyan-500/10
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-cyan-500/10
              border
              border-cyan-400/20
              flex
              items-center
              justify-center
              text-cyan-400
              text-2xl
              shadow-lg
              shadow-cyan-500/20
            "
          >
            ✦
          </div>

          <div>
            <h1 className="text-xl font-black text-white">
              SmartCampus AI
            </h1>

            <p className="text-cyan-400 text-sm">
              AI University Ecosystem
            </p>
          </div>
        </motion.div>

        {/* NAVIGATION */}
        <div className="hidden md:flex items-center gap-3">
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="
              px-5
              py-2
              rounded-xl
              bg-white/5
              border
              border-white/10
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
              transition-all
              duration-300
            "
          >
            Dashboard
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="
              px-5
              py-2
              rounded-xl
              bg-white/5
              border
              border-white/10
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
              transition-all
              duration-300
            "
          >
            AI Assistant
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="
              px-5
              py-2
              rounded-xl
              bg-cyan-500
              text-black
              font-semibold
              hover:shadow-lg
              hover:shadow-cyan-500/30
              transition-all
              duration-300
            "
          >
            Platform
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}