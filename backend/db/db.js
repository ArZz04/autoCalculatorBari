const { MongoClient } = require('mongodb');

const uri = "";

// Crear una instancia del cliente MongoDB
const client = new MongoClient(uri);

// Conectar al servidor MongoDB
client.connect(err => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión a la base de datos establecida correctamente!");
});

// Exportar el cliente MongoDB
module.exports = client;
