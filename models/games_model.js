import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        required: true, 
    },
    platform: { 
        type: String, 
        required: true, 
    },
    launched: { 
        type: String, 
        required: true, 
    },
    developers: { 
        type: String, 
        required: true, 
    }
})


export default mongoose.model('games', gamesSchema)