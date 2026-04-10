import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      return setError("Preencha todos os campos");
    }

    try {
      const res = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      nav("/home");
    } catch {
      setError("Email ou senha inválidos");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input
        className={!email && error ? "input-error" : ""}
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        className={!password && error ? "input-error" : ""}
        placeholder="Senha"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={handleLogin}>Entrar</button>

      <p onClick={() => nav("/register")}>
        Não tem conta? Cadastre-se
      </p>
    </div>
  );
}