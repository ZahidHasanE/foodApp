import mongoose from "mongoose";



export const conncetDB = async ()=>{
    await mongoose.connect('mongodb+srv://zahidruetcse:9sLdKZ50IZOgpQ8Q@cluster0.ba01nax.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}