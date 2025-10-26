import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let dadosAtuais = { temperatura: 0, umidade: 0, pressao: 0, ultimaAtualizacao: null };

app.post("/api/dados", (req, res) => {
  dadosAtuais = {
    ...req.body,
    ultimaAtualizacao: new Date().toLocaleString("pt-BR", { timeZone: "America/Bahia" })
  };
  console.log("📡 Dados recebidos:", dadosAtuais);
  res.json({ status: "ok" });
});

app.get("/api/dados", (req, res) => {
  res.json(dadosAtuais);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));



