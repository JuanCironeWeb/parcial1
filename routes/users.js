import express from 'express'; 
import { getUsers , createUsers, updateUsers} from '../controllers/users_controllers.js';
import verificarToken from "../middlewares/auth.js";
import Joi from 'joi';
const ruta = express.Router(); 

// const schema = Joi.object({
//     nombre: Joi.string()
//                 .alphanum()
//                 .min(3)
//                 .required(),
//     password: Joi.string()
//                 .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
//     email: Joi.string()
//                 .email({minDomainSegments: 2, tlds: {allow: ["com", "net", "edu"]}})
// })

ruta.get('/', verificarToken, (req, res) => { 
    let result = getUsers(); 
    result
    .then(usuarios => { 
        res.json(usuarios)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.post('/', verificarToken, (req, res) => { 
    let body = req.body
    const {error }= schema.validate({nombre: body.nombre, email: body.email, password: body.password})
    if(!error){ 
        let result = createUsers(body); 
        result
        .then(usuarios => { 
            res.json(usuarios)
        })
        .catch(err => { 
            res.status(400).json({err})
        })
    }else{ 
        res.status(400).json(error)
    }
})
ruta.put('/:id', verificarToken, (req, res) => { 
    let body = req.body
    let result = updateUsers(req.params.id, body); 
    result
    .then(usuarios => { 
        res.json(usuarios)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})

export default ruta