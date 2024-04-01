const { func } = require('joi');
const client = require('./db.js');

async function insertUser(user) {
    try {
        await client.connect()

        const collection = client.db("db_bari").collection("users");
        await collection.insertOne(user);
    } catch (error) {
        console.error(error);
        throw error; // Lanzar el error para manejarlo en el código que llama a esta función
    } finally {
        if (client) {
            await client.close();
        }
    }
}

async function getUserById(userId) {
    try {
        // Conectarse a la base de datos
        await client.connect();

        // Obtener la colección de usuarios
        const collection = client.db("db_bari").collection("users");

        // Buscar el usuario por su ID
        const user = await collection.findOne({ id: userId });
        
        // Retornar el usuario encontrado
        return user;
    } catch (error) {
        console.error(error);
        throw error; // Lanzar el error para manejarlo en el código que llama a esta función
    } finally {
        // No necesitas cerrar la conexión aquí, puedes dejar que se maneje en otro lugar
    }
}

async function getUsersDb(){
    try{
        // Esperar a que la conexión se establezca
        await client.connect();

        const collection = client.db("db_bari").collection("users");
        const users = await collection.find({}).toArray();
        return users;
    } catch (error) {
        console.error(error);
        throw error; // Lanzar el error para manejarlo en el código que llama a esta función
    } finally {
        // No necesitas cerrar la conexión aquí, puedes dejar que se maneje en otro lugar
    }
}

async function valideUser() {
    try {
        await client.connect();

        const collection = client.db("db_bari").collection("users");
        const user = await collection.findOne({ user: 'admin' });
        return user;
    } catch (error) {
        console.error(error);
        throw error; // Lanzar el error para manejarlo en el código que llama a esta función
    } finally {
        if (client) {
            await client.close();
        }
    }
}

module.exports = { insertUser, valideUser, getUsersDb, getUserById };
