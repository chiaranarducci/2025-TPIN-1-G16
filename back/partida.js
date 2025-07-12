const express = require("express");
const router = express.Router();
const { registrarPartida } = require("../controllers/partidaController");

router.post("/", registrarPartida);

module.exports = router;
