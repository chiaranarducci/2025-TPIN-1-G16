const connection = require("../db/connection");

const obtenerJugadores = (req, res) => {
  connection.query("SELECT * FROM jugadores ORDER BY RAND() LIMIT 32", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

module.exports = { obtenerJugadores };
