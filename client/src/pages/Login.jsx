import "../App.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import app from "../firebase";

import { useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth(app);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {
        alert("Login Successful");
        localStorage.setItem("user", email);

        navigate("/dashboard");
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Navbar />

      <div className="main-container">
        <h1 className="title">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="sos-btn"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Login;