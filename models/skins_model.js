import mongoose from "mongoose";
    const Schema = mongoose.Schema;

const skinsSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        required: true, 
    },
    type: { 
        type: String, 
        required: true, 
    },
    price: { 
        type: Number, 
        required: true, 
    },
    condition: { 
        type: String, 
        required: false, 
    },
    raritie: { 
        type: String, 
        required: false
    }, 
    game: { 
        type: Schema.Types.ObjectId, ref: 'games'
    }
})


export default mongoose.model('Skins', skinsSchema)