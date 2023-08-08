import mongoose from "mongoose";

export const Connection=async (UserName)=>{
        const URL =`mongodb+srv://${UserName}:${UserName}@cluster0.u0dozxv.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useNewUrlParser: true , useUnifiedTopology: true});
        console.log('database connected')
    }catch(err){
        console.log('error while db connection ',err.message)
    }
}

export default Connection;