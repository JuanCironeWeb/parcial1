import games from "../models/games_model.js";


async function getGames(){ 
    let result = await games.find()
    return result
}
async function getGamesByID(id){ 
    let result = await games.findById(id)
    return result
}
async function createGames(req){ 
    
}

async function updateGames(id, body){ 
    let result = await games.findByIdAndUpdate(id, { 
        $set: { 
            platform: body.platform, 
            developers: body.developers
        }
    }, {new: true})
    return result
}
async function deleteGames(id){ 
    let result = await games.deleteOne({"_id": id })
    return result
}
async function getGamePlatform(platform){ 
    let result = await games.find({"platform" : platform})
    return result
}
async function getGameLaunched(year){ 
    let result = await games.find({"launched" :{$regex: year}})
    return result
}
async function getGamesName(name){ 
    let result = await games.find({"name" : name})
    return result
}
async function getGamesSort(){ 
    let result = await games.find().sort({"name": 1})
    return result
}
async function getGamesPaged(limit){ 
    let result = await games.find().limit(limit)
    return result
}

export {getGames, createGames, updateGames, getGamesByID, deleteGames, getGamePlatform, getGameLaunched, getGamesName, getGamesSort, getGamesPaged};