import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Loader from "./components/Loader";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import SafetyTips from "./pages/SafetyTips";
import AIChat from "./pages/AIChat";

function App() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/support"
          element={<Support />}
        />

        <Route
          path="/safetytips"
          element={<SafetyTips />}
        />

        <Route
          path="/aichat"
          element={<AIChat />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;