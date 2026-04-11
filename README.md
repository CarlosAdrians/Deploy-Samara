# 🔐 Sistema de Autenticação Fullstack (React + Node + MongoDB)

## 📌 Sobre o projeto

Este projeto é uma aplicação **fullstack de autenticação de usuários**, desenvolvida com:

* ⚛️ **Frontend:** React (Vite)
* ⚙️ **Backend:** Node.js + Express
* 🗄️ **Banco de Dados:** MongoDB Atlas
* 🌐 **Deploy:** Vercel (Front) + Render (Back)

A aplicação permite cadastro, login e acesso a uma área protegida, utilizando autenticação com **JWT (JSON Web Token)**.

---

## 🚀 Funcionalidades

* ✅ Cadastro de usuário (email e senha)
* ✅ Login com autenticação JWT
* ✅ Senha criptografada com bcrypt
* ✅ Rota protegida (acesso somente com token)
* ✅ Validação de formulário no frontend
* ✅ Integração completa entre frontend e backend
* ✅ Deploy em produção

---

## 🌐 Links da aplicação

* 🔗 **Frontend:** https://deploy-samara.vercel.app
* ⚙️ **Backend (API):** https://deploy-samara.onrender.com
* 💻 **Repositório:** https://github.com/CarlosAdrians/Deploy-Samara

---

## 🛠️ Tecnologias utilizadas

### Frontend

* React
* Vite
* Axios
* React Router DOM

### Backend

* Node.js
* Express
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv
* cors

### Banco de Dados

* MongoDB Atlas

---

## ⚙️ Como rodar o projeto localmente

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/CarlosAdrians/Deploy-Samara.git
```

---

### 🔹 2. Backend

```bash
cd backend
npm install
```

Criar um arquivo `.env`:

```env
MONGO_URI=sua_string_do_mongodb
JWT_SECRET=seu_segredo
```

Rodar:

```bash
npm start
```

---

### 🔹 3. Frontend

```bash
cd frontend
npm install
```

Criar um arquivo `.env`:

```env
VITE_API_URL=http://localhost:5000
```

Rodar:

```bash
npm run dev
```

---

## 🔐 Autenticação

O sistema utiliza **JWT (JSON Web Token)** para autenticação:

* O token é gerado no login
* Armazenado no `localStorage`
* Enviado nas requisições protegidas
* Validado no backend

---

## 📦 Estrutura do projeto

```bash
Deploy-Samara/
 ├── backend/
 │   ├── src/
 │   │   ├── controllers/
 │   │   ├── models/
 │   │   ├── routes/
 │   │   └── config/
 │
 ├── frontend/
 │   ├── src/
 │   │   ├── api/
 │   │   ├── pages/
 │   │   ├── routes/
 │   │   └── components/
```

---

## 🌍 Deploy

* **Frontend:** Vercel
* **Backend:** Render
* **Banco:** MongoDB Atlas

Configuração via variáveis de ambiente (`.env`)

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto foram trabalhados conceitos como:

* Integração entre frontend e backend
* Autenticação com JWT
* Criptografia de senhas
* Deploy em produção
* Consumo de API com Axios
* Proteção de rotas no React

---

## 👨‍💻 Autor

Desenvolvido por **Carlos Adrians** 🚀

---

## 📄 Licença

Este projeto está sob a licença MIT.
