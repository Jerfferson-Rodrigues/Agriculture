require("dotenv").config();
const express = require("express");

const farmerRoutes = require("./src/routes");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/produtores", farmerRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Brain Agriculture",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

console.log("Backend rodando");
