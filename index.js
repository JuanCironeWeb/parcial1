import express from "express" ; 
import skinsRoutes from './routes/skins.js'
import gamesRoutes from './routes/games.js'
import usersRoutes from './routes/users.js'
import mongoose from "mongoose";
import "dotenv/config"
import auth from './routes/auth.js'


mongoose 
.connect("mongodb://127.0.0.1:27017/skins")
.then(() => console.log("Conectado"))
.catch((err) => {console.log("No se puedo conectar a la base de datos" + err)})

const app = express() 
app.use(express.json())
app.use(express.static("views"))
app.use(express.urlencoded({extended: true}))
app.use('/Skins', skinsRoutes)
app.use('/Games', gamesRoutes)
app.use('/Users', usersRoutes)
app.use('/Login', auth)



const PORT = process.env.PORT || 3002

app.listen(PORT) ;
