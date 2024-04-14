const express =require("express")
// cors setup
const CORS=require("cors")

// cookie-parser

const cookieParser=require("cookie-parser")




const app=express()
app.use(CORS())   //globably enabled
const bodyParser = require('body-parser');


//middlwares or body pareser
app.use(bodyParser.json({limit:"21kb"}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

module.exports=app