const connection = require("../db/connection");

const registrarPartida = (req, res) => {
  const { usuario, resultado } = req.body;

  connection.query("SELECT id FROM registro WHERE usuario = ?", [usuario], (err, rows) => {
    if (err || rows.length === 0) return res.status(400).send("Usuario no encontrado");

    const userId = rows[0].id;
    const columna = resultado === "ganada" ? "partidas_ganadas" : "partidas_perdidas";

    connection.query(
      `UPDATE estadisticas SET ${columna} = ${columna} + 1 WHERE usuario_id = ?`,
      [userId],
      (err2) => {
        if (err2) return res.status(500).send(err2);
        res.send("Estadística actualizada");
      }
    );
  });
};

module.exports = { registrarPartida };
