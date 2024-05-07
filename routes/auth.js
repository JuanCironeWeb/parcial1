import express from 'express'
import Usuario from '../models/users_model.js'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const ruta = express.Router(); 

ruta.post('/', (req, res) => { 
    let usuario = Usuario.findOne({"email": req.body.email})
    usuario
    .then(user => { 
        if(user){ 
            const passwordValido = bcrypt.compareSync(req.body.password, user.password)
            if(!passwordValido) return res.status(400).json({msj: 'Password incorrecto'})
                const jwToken = jwt.sign({
                    usuario: {_id:user._id, name:user.name, email:user.email}
                },process.env.SEED, {expiresIn: process.env.EXPIRATION})
            res.json({ 
                usuario: { 
                    _id:user._id, 
                    name:user.name, 
                    email:user.email
                }, jwToken
            })
        }else{ 
            res.status(400).json({msj: 'Email incorrecto'})
        }
    })
})


export default ruta