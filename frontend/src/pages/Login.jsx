import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      nav("/home");
    } catch {
      alert("Erro no login");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Entrar</button>

      <p onClick={() => nav("/register")}>Cadastrar</p>
    </div>
  );
}