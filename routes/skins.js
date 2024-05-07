import express from "express";
import {getSkins, createSkin, updateSkins, getSkinsByID, deleteSkins, getSkinsType, getSkinsPrice, getSkinsName, getSkinsSort, getSkinsPaged} from "../controllers/skins_controller.js"
import verificarToken from "../middlewares/auth.js";


const ruta = express.Router(); 

ruta.get('/', (req, res) => { 
    let skins = getSkins() ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/id/:id', (req, res) => { 
    let skins = getSkinsByID(req.params.id) ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.post('/:id', verificarToken, (req, res) => { 
    let body = req.body
    let skins = createSkin(req.params.id, body)
    skins.then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.put('/:id',verificarToken, (req, res) => { 
    let body = req.body
    let skins = updateSkins(req.params.id, body) ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.put('/delete/:id', verificarToken , (req, res) => { 
    let skins = deleteSkins(req.params.id) ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/type/:type', (req, res) => { 
    let skins = getSkinsType(req.params.type) ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/price/:price', (req, res) => { 
    let skins = getSkinsPrice(req.params.price) ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/name/:name', (req, res) => { 
    let skins = getSkinsName(req.params.name) ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/sort', (req, res) => { 
    let skins = getSkinsSort() ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/paged/:limit/:skip', (req, res) => { 
    let skins = getSkinsPaged(req.params.limit, req.params.skip) ; 
    skins
    .then(skin => { 
        res.json(skin)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})






export default ruta