const express = require("express");
const router = express.Router();
const farmerServices = require("./services/farmerServices");

router.get("/:id", async (req, res) => {
  try {
    const agro = await farmerServices.selectFarmer(req.params.id);
    res.json(agro);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao obter produtor.");
  }
});

router.get("/", async (req, res) => {
  try {
    const agros = await farmerServices.selectFarmers();
    res.json(agros);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao obter produtores.");
  }
});

router.post("/", async (req, res) => {
  try {
    await farmerServices.insertFarmer(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao inserir produtor.");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await farmerServices.updateFarmer(req.params.id, req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao atualizar produtor.");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await farmerServices.deleteFarmer(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao excluir produtor.");
  }
});

module.exports = router;
