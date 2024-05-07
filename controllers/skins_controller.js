import Skin from "../models/skins_model.js";

async function getSkins(){ 
    let result = await Skin.find()
    .populate('game', 'name platform -_id')
    return result
}
async function getSkinsByID(id){ 
    let result = await Skin.findById(id)
    return result
}
async function createSkin(id, body){ 
let skinNueva = new Skin({ 
    name: body.name, 
    type: body.type,
    price: body.price, 
    condition: body.condition, 
    raritie: body.raritie, 
    game: id
})
return await skinNueva.save();
}
async function updateSkins(id, body){ 
    let skin = await Skin.findByIdAndUpdate(id, { 
        $set: { 
            price: body.price, 
            condition: body.condition
        }
    }, {new: true})
    return skin;
}
async function deleteSkins(id){ 
    let skin = await Skin.deleteOne({"_id": id })
    return skin;
}
async function getSkinsType(type){ 
    let result = await Skin.find({"type" : type})
    return result
}
async function getSkinsPrice(precio){ 
    let result = await Skin.find({"price": {$gt : precio}})
    return result
}
async function getSkinsName(name){ 
    let result = await Skin.find({"name": name})
    return result
}
async function getSkinsSort(){ 
    let result = await Skin.find().sort({"name": 1})
    return result
}
async function getSkinsPaged(limit, skip){ 
    let result = await Skin.find().limit(limit).skip(skip)
    return result
}
export {getSkins, createSkin, updateSkins, getSkinsByID, deleteSkins, getSkinsType, getSkinsPrice, getSkinsName, getSkinsSort, getSkinsPaged};