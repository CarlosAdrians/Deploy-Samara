import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const nav = useNavigate();

  const handleRegister = async () => {
    setMessage("");

    if (!email || !password) {
      return setMessage("Preencha todos os campos");
    }

    if (password.length < 6) {
      return setMessage("Senha deve ter no mínimo 6 caracteres");
    }

    try {
      await api.post("/api/auth/register", { email, password });
      setMessage("Cadastro realizado com sucesso!");
      setTimeout(() => nav("/"), 1500);
    } catch {
      setMessage("Erro ao cadastrar (email já pode existir)");
    }
  };

  return (
    <div className="auth-container">
      <h2>Cadastro</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        placeholder="Senha"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />

      {message && (
        <p className={message.includes("sucesso") ? "success" : "error"}>
          {message}
        </p>
      )}

      <button onClick={handleRegister}>Cadastrar</button>

      <p onClick={() => nav("/")}>
        Já tem conta? Faça login
      </p>
    </div>
  );
}