const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '10.1.5.205',
  user: '2025-5INF-G16',
  password: 'herrero',
  database: '2025-5INF-G16',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL!');
});

module.exports = connection;
