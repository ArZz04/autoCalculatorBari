const { valideUser, getUsersDb, insertUser, getUserById } = require('../db/functions.js');
const userSchema = require('../db/schema.js');


async function login(req, res) {
    try {
        const user = await valideUser();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al iniciar sesion con el usuario.');
    }
}

async function getUsers(req, res){
    try{
        const users = await getUsersDb();
        res.status(200).json(users);
    }catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los usuarios.")
    }
}

async function newUser(req, res) {
    try {
        // Validar los datos del usuario contra el esquema
        const { error, value } = userSchema.validate(req.body);
        if (error) {
            // Si hay un error de validación, responder con un mensaje de error
            return res.status(400).json({ error: error.details[0].message });
        }

        // Verificar si el ID ya existe en la base de datos
        const existingUser = await getUserById(value.id);
        if (existingUser) {
            return res.status(400).json({ error: "El ID ya está en uso" });
        }

        const newUser = await insertUser(value); // Suponiendo que req.body contiene los datos del nuevo usuario

        // Una vez que se ha creado el usuario, respondemos con el nuevo usuario creado
        res.status(200).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al insertar el nuevo usuario");
    }
}

module.exports = { login, getUsers, newUser };