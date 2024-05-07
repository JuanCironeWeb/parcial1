import express from 'express'; 
import { getUsers , createUsers, updateUsers} from '../controllers/users_controllers.js';
import verificarToken from "../middlewares/auth.js";
const ruta = express.Router(); 

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
ruta.post('/',verificarToken, (req, res) => { 
    let body = req.body;
        let result = createUsers(body); 
        result
        .then(usuarios => { 
            res.json(usuarios)
        })
        .catch(err => { 
            res.status(400).json({err: err.message})
        })
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