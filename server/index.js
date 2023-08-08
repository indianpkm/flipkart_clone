import express from "express";
import Connection from "./databse/db.js";
import cors from 'cors'
import dotenv from 'dotenv'
import DefaultData from './default.js';
import Router from './routes/route.js'
import bodyParser from "body-parser";

const app=express();
dotenv.config();
const UserName=process.env.db_username;

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router)
const port=process.env.PORT || 8000
Connection(UserName);

app.listen(port,()=>{
    console.log(`Listining at ${port}`)
})

DefaultData();