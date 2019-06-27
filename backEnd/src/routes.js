const express = require("express");
const routes = express.Router();

const CurriculoController = require("./controllers/CurriculoControler");

routes.get("/curriculo/listar", CurriculoController.index);
routes.post("/curriculo/inserir", CurriculoController.store);
routes.get("/curriculo/:id/listarEspecifico", CurriculoController.show);
routes.put("/curriculo/:id/alterar", CurriculoController.update);
routes.delete("/curriculo/:id/deletar", CurriculoController.destroy);

module.exports = routes;