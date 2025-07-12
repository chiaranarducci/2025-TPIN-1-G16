const express = require("express");
const cors = require("cors");
const app = express();
const jugadoresRoutes = require("./routes/jugadores");
const partidaRoutes = require("./routes/partida");

app.use(cors());
app.use(express.json());

app.use("/jugadores", jugadoresRoutes);
app.use("/partida", partidaRoutes);

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
