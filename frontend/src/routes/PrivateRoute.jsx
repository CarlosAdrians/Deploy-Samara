import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../api/api";

export default function PrivateRoute({ children }) {
  const [valid, setValid] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setValid(false);
      return;
    }

    api.get("/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => setValid(true))
      .catch(() => {
        localStorage.removeItem("token");
        setValid(false);
      });
  }, []);

  if (valid === null) return <p>Carregando...</p>;

  if (!valid) return <Navigate to="/" />;

  return children;
}