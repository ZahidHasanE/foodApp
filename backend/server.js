import express from "express"
import cors from "cors"
import { conncetDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"




//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//DB Connection
conncetDB();

//API endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));


app.get("/",(req,res)=>{
    res.send("API working")
})


app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
