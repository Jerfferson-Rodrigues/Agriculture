require("dotenv").config();

const db = require("./database");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Funcionando",
  });
});

app.get("/produtores/:id", async (req, res) => {
  const agro = await db.selectFarmer(req.params.id);
  res.json(agro);
});

app.get("/produtores", async (req, res) => {
  const agros = await db.selectFarmers();
  res.json(agros);
});

app.post("/produtores", async (req, res) => {
  console.log(req.body);
  await db.insertFarmer(req.body);
  res.sendStatus(201);
});

app.patch("/produtores/:id", async (req, res) => {
  await db.updateFarmer(req.params.id, req.body);
  res.sendStatus(200);
});

app.delete("/produtores/:id", async (req, res) => {
  await db.deleteFarmer(req.params.id);
  res.sendStatus(204);
});

app.listen(port);

console.log("Backend rodando");
