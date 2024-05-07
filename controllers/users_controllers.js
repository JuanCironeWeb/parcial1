import Usuario from "../models/users_model.js";
import bcrypt from 'bcrypt'

async function getUsers(){ 
    let usuarios = await Usuario.find()
    return usuarios
}
async function createUsers(body){ 
    let usuario = new Usuario({ 
        name: body.name, 
        password: bcrypt.hashSync(body.password, 10), 
        email: body.email
    }) 
    return await usuario.save();
}
async function updateUsers(id, body){ 
    let usuario = await Usuario.findByIdAndUpdate(id, { 
        $set:{ 
            email: body.email
        }
    }, {new: true})
    return usuario;
}

export {getUsers, createUsers, updateUsers}
