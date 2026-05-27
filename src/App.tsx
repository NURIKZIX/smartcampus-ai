import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assistant from "./pages/Assistant";
import Attendance from "./pages/Attendance";
import Practice from "./pages/Practice";
import Marketplace from "./pages/Marketplace";
import Schedule from "./pages/Schedule";
import Internship from "./pages/Internship";
import GPA from "./pages/GPA";
import DeanOffice from "./pages/DeanOffice";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* AI ASSISTANT */}
        <Route
          path="/assistant"
          element={
            <ProtectedRoute>
              <Assistant />
            </ProtectedRoute>
          }
        />

        {/* ATTENDANCE */}
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>
          }
        />

        {/* PRACTICE */}
        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <Practice />
            </ProtectedRoute>
          }
        />

        {/* SCHEDULE */}
        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          }
        />

        {/* INTERNSHIP */}
        <Route
          path="/internship"
          element={
            <ProtectedRoute>
              <Internship />
            </ProtectedRoute>
          }
        />

        {/* GPA */}
        <Route
          path="/gpa"
          element={
            <ProtectedRoute>
              <GPA />
            </ProtectedRoute>
          }
        />

        {/* MARKETPLACE */}
        <Route
          path="/marketplace"
          element={
            <ProtectedRoute>
              <Marketplace />
            </ProtectedRoute>
          }
        />

        {/* DEAN OFFICE */}
        <Route
          path="/dean"
          element={
            <ProtectedRoute>
              <DeanOffice />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}