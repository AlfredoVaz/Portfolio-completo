const mongoose = require("mongoose");
const Curriculo = require("../models/Curriculo");

class CurriculoController {
  async index(req, res) {
    const curriculo = await Curriculo.find();
    return res.json(curriculo);
  }
  async store(req, res) {
    const curriculo = await Curriculo.create(req.body);
    return res.json(curriculo);
  }
  async show(req, res) {
    const curriculo = await Curriculo.findById(req.params.id);
    return res.json(curriculo);
  }
  async update(req, res) {
    const curriculo = await Curriculo.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(curriculo);
  }
  async destroy(req, res) {
    await Curriculo.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new CurriculoController();
