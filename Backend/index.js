import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import noteRoutes from './routes/note.route.js'
import cors from 'cors'

const app = express()
dotenv.config()
const port = process.env.PORT ||4002


//DataBase connection Code 
try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Database Connected")
} catch (error) {
    console.log("error conecting to database",error)
}

//rounting Middleware
app.use(express.json())
app.use(cors())

app.use("/api/v1/noteapp", noteRoutes);

app.listen(port, () => {
  console.log(`Server Started on ${port}`)
})
