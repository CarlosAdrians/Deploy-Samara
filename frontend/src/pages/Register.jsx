import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleRegister = async () => {
    try {
      await api.post("/api/auth/register", { email, password });
      alert("Cadastro feito!");
      nav("/");
    } catch {
      alert("Erro");
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
}