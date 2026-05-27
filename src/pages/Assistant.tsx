import {
  useState,
  useEffect,
  useRef,
} from "react";

import { motion } from "framer-motion";

import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import ReactMarkdown from "react-markdown";



import {
  Bot,
  Send,
} from "lucide-react";

import {
  auth,
  db,
} from "../firebase";

import Sidebar from "../components/Sidebar";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function Assistant() {

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState<ChatMessage[]>([
      {
        role: "assistant",

        content: `
# Сәлем 👋

Мен SmartCampus AI.

Көмектесе аламын:

- GPA
- Оқу
- Өнімділік
- Карьера
- Практика
- Университет өмірі
`,
      },
    ]);

  const [loading, setLoading] =
    useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);
  
const loadMessages =
  async () => {

    const user =
      auth.currentUser;

    if (!user) return;

    const q = query(
      collection(
        db,
        "users",
        user.uid,
        "messages"
      ),

      orderBy(
        "createdAt",
        "asc"
      )
    );

    const snapshot =
      await getDocs(q);

    const loadedMessages =
      snapshot.docs.map(
        (doc) =>
          doc.data()
      ) as ChatMessage[];

    if (
      loadedMessages.length > 0
    ) {

      setMessages(
        loadedMessages
      );
    }
  };
  useEffect(() => {
  loadMessages();
}, []);
  const askAI = async () => {

    if (!message.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: message,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);

    setMessage("");

    setLoading(true);

    try {

      const res = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization: `Bearer ${
              import.meta.env
                .VITE_OPENROUTER_API_KEY
            }`,

            "HTTP-Referer":
              "http://localhost:5173",

            "X-Title":
              "SmartCampus AI",
          },

          body: JSON.stringify({
            model:
              "openai/gpt-4o-mini",

            max_tokens: 1000,

            messages: [
              {
                role: "system",

                content: `
You are SmartCampus AI.

You help university students.

Support:
- Kazakh
- Russian
- English

Always answer in the same language as user.

Use markdown formatting.

Be modern and friendly.
`,
              },

              ...updatedMessages,
            ],
          }),
        }
      );

      const data = await res.json();

      console.log(data);

      const aiMessage = {
        role: "assistant" as const,

        content:
          data.choices?.[0]?.message
            ?.content ||
          "⚠️ AI Error",
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,

        {
          role: "assistant",

          content:
            "⚠️ Connection Error",
        },
      ]);
    }

    setLoading(false);
  };

  return (

    <div className="min-h-screen bg-[#030712] text-white flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 relative overflow-hidden p-4 md:p-10">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          className="relative z-10 max-w-7xl mx-auto"
        >

          {/* HEADER */}
          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">

              <Bot
                size={34}
                className="text-cyan-300"
              />

            </div>

            <div>

              <h1 className="text-3xl md:text-5xl font-black">
                SmartCampus AI
              </h1>

              <p className="text-white/50 mt-2">
                Intelligent University Assistant
              </p>

            </div>
          </div>

          {/* CHAT BOX */}
          <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-4 md:p-8">

            {/* CHAT HISTORY */}
            <div className="space-y-6 min-h-[500px]">

              {messages.map(
                (msg, index) => (

                  <div
                    key={index}

                    className={`flex ${
                      msg.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    <div
                      className={`max-w-3xl rounded-3xl p-6 border ${
                        msg.role === "user"
                          ? "bg-blue-500/10 border-blue-500/20"
                          : "bg-cyan-500/10 border-cyan-500/20"
                      }`}
                    >

                      <p
                        className={`font-semibold mb-3 ${
                          msg.role === "user"
                            ? "text-blue-300"
                            : "text-cyan-300"
                        }`}
                      >

                        {msg.role === "user"
                          ? "You"
                          : "SmartCampus AI"}

                      </p>

                      <div className="prose prose-invert max-w-none text-white/80">

                        <ReactMarkdown>
                          {msg.content}
                        </ReactMarkdown>

                      </div>

                    </div>

                  </div>
                )
              )}

              {/* LOADING */}
              {loading && (

                <div className="max-w-3xl rounded-3xl bg-cyan-500/10 border border-cyan-500/20 p-6">

                  <p className="text-cyan-300 font-semibold">
                    SmartCampus AI
                  </p>

                  <div className="flex gap-2 mt-4">

                    <div className="w-3 h-3 rounded-full bg-cyan-300 animate-bounce" />

                    <div className="w-3 h-3 rounded-full bg-cyan-300 animate-bounce delay-100" />

                    <div className="w-3 h-3 rounded-full bg-cyan-300 animate-bounce delay-200" />

                  </div>

                </div>
              )}

              <div ref={messagesEndRef} />

            </div>

            {/* QUICK ACTIONS */}
            <div className="flex flex-wrap gap-3 mt-10">

              <button
                onClick={() =>
                  setMessage(
                    "GPA-ды қалай көтеруге болады?"
                  )
                }

                className="px-4 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition"
              >
                📈 GPA
              </button>

              <button
                onClick={() =>
                  setMessage(
                    "Маған оқу жоспарын жаса"
                  )
                }

                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                📚 Study Plan
              </button>

              <button
                onClick={() =>
                  setMessage(
                    "Практика табуға көмектес"
                  )
                }

                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                💼 Internship
              </button>

              <button
                onClick={() =>
                  setMessage(
                    "Өнімділік бойынша кеңес бер"
                  )
                }

                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                ⚡ Productivity
              </button>

            </div>

            {/* INPUT */}
            <div className="sticky bottom-0 mt-10">

              <div className="flex items-center gap-4 rounded-3xl bg-black/50 border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.1)] p-4 backdrop-blur-2xl">

                <input
                  type="text"

                  value={message}

                  onChange={(e) =>
                    setMessage(
                      e.target.value
                    )
                  }

                  onKeyDown={(e) => {

                    if (
                      e.key === "Enter"
                    ) {

                      askAI();
                    }
                  }}

                  placeholder="SmartCampus AI-дан сұра..."

                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/30 text-lg"
                />

                <button
                  onClick={askAI}

                  className="w-14 h-14 rounded-2xl bg-cyan-400 text-black flex items-center justify-center hover:scale-105 active:scale-95 transition"
                >

                  <Send size={22} />

                </button>

              </div>

            </div>

          </div>

        </motion.div>

      </main>

    </div>
  );
}