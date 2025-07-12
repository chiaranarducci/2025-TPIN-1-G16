const express = require("express");
const router = express.Router();
const { obtenerJugadores } = require("../controllers/jugadoresController");

router.get("/", obtenerJugadores);

module.exports = router;
