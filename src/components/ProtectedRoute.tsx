import {
  Navigate,
} from "react-router-dom";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  auth,
} from "../firebase";

import {
  useEffect,
  useState,
} from "react";

export default function ProtectedRoute({
  children,
}: any) {
  const [user, setUser] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to="/login" />
    );
  }

  return children;
}