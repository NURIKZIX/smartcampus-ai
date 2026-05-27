import { useState } from "react";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase";

import {
  auth,
  googleProvider,
} from "../firebase";

export default function Login() {
 

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [isLogin, setIsLogin] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // GOOGLE LOGIN
  const handleGoogleLogin =
    async () => {

      try {

        setLoading(true);
        setError("");

        const result =
          await signInWithPopup(
            auth,
            googleProvider
          );

        const user =
          result.user;

        await setDoc(
          doc(db, "users", user.uid),
          {
            uid: user.uid,

            email: user.email,

            name: user.displayName,

            photo:
              user.photoURL,

            gpa: "3.80",

            attendance: "98%",

            createdAt:
              new Date(),
          },

          {
            merge: true,
          }
        );

        console.log(
          "GOOGLE LOGIN SUCCESS"
        );

        window.location.href =
          "/dashboard";

      } catch (error: any) {

        console.log(error);

        setError(
          error.message
        );
      }

      setLoading(false);
    };

  // EMAIL LOGIN / REGISTER
  const handleEmailAuth =
    async () => {

      try {

        setLoading(true);

        setError("");

        // LOGIN
        if (isLogin) {

          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          console.log(
            "LOGIN SUCCESS"
          );
        }

        // REGISTER
        else {

          const userCredential =
            await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );

          const user =
            userCredential.user;

          await setDoc(
            doc(db, "users", user.uid),
            {
              uid: user.uid,

              email: user.email,

              name:
                user.email?.split(
                  "@"
                )[0],

              gpa: "3.50",

              attendance: "95%",

              createdAt:
                new Date(),
            }
          );

          console.log(
            "REGISTER SUCCESS"
          );
        }

        // REDIRECT
        window.location.href =
          "/dashboard";

      } catch (error: any) {

        console.log(error);

        if (
          error.code ===
          "auth/invalid-credential"
        ) {

          setError(
            "Email немесе пароль қате"
          );

        } else if (
          error.code ===
          "auth/email-already-in-use"
        ) {

          setError(
            "Бұл email бұрын тіркелген"
          );

        } else if (
          error.code ===
          "auth/weak-password"
        ) {

          setError(
            "Пароль тым әлсіз"
          );

        } else {

          setError(
            error.message
          );
        }
      }

      setLoading(false);
    };

  return (

    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

        {/* TITLE */}
        <h1 className="text-4xl font-black text-white mb-2">
          SmartCampus AI
        </h1>

        <p className="text-white/60 mb-8">
          Қазақстандық AI университет платформасы
        </p>

        {/* ERROR */}
        {error && (

          <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-3 rounded-2xl text-sm">

            {error}

          </div>

        )}

        {/* INPUTS */}
        <div className="space-y-4">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Пароль"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }

            className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
          />

          {/* LOGIN BUTTON */}
          <button
            onClick={handleEmailAuth}

            disabled={loading}

            className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-[1.02] transition disabled:opacity-50"
          >

            {loading
              ? "Жүктелуде..."
              : isLogin
              ? "Кіру"
              : "Тіркелу"}

          </button>

          {/* GOOGLE BUTTON */}
          <button
            onClick={
              handleGoogleLogin
            }

            disabled={loading}

            className="w-full py-4 rounded-2xl bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/20 transition disabled:opacity-50"
          >

            Google арқылы кіру

          </button>

          {/* SWITCH */}
          <button
            onClick={() =>
              setIsLogin(
                !isLogin
              )
            }

            className="w-full text-white/60 text-sm mt-2 hover:text-cyan-400 transition"
          >

            {isLogin
              ? "Аккаунтың жоқ па? Тіркелу"
              : "Аккаунтың бар ма? Кіру"}

          </button>

        </div>

      </div>

    </div>
  );
}