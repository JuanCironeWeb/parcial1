import express from "express";
import {getGames, getGamesByID, updateGames, deleteGames, getGamePlatform,getGameLaunched, getGamesName, getGamesSort, getGamesPaged} from "../controllers/games_controller.js"
import verificarToken from "../middlewares/auth.js";
const ruta = express.Router(); 

ruta.get("/", (req, res) => { 
    let resultado = getGames()
    resultado
    .then(games => { 
        res.json(games)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/id/:id', (req, res) => { 
    let resultado = getGamesByID(req.params.id) ; 
    resultado
    .then(game => { 
        res.json(game)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.put('/:id', verificarToken, (req, res) => { 
    let body = req.body
    let resultado = updateGames(req.params.id, body) ; 
    resultado
    .then(game => { 
        res.json(game)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.put('/delete/:id', verificarToken, (req, res) => { 
    let resultado = deleteGames(req.params.id) ; 
    resultado
    .then(game => { 
        res.json(game)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/platform/:platform', (req, res) => { 
    let resultado = getGamePlatform(req.params.platform) ; 
    resultado
    .then(game => { 
        res.json(game)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/launched/:year', (req, res) => { 
    let resultado = getGameLaunched(req.params.year) ; 
    resultado
    .then(game => { 
        res.json(game)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/name/:name', (req, res) => { 
    let resultado = getGamesName(req.params.name) ; 
    resultado
    .then(game => { 
        res.json(game)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/sort', (req, res) => { 
    let resultado = getGamesSort() ; 
    resultado
    .then(game => { 
        res.json(game)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})
ruta.get('/paged/:limit', (req, res) => { 
    let resultado = getGamesPaged(req.params.limit) ; 
    resultado
    .then(game => { 
        res.json(game)
    })
    .catch(err => { 
        res.status(400).json({err})
    })
})

export default ruta