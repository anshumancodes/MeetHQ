const express = require("express");
const ApiResponse =require("../services/ApiResponse")
const ApiError =require("../services/ApiError");

const User = require("../models/user.models");
const {setUser,getUser}=require("../services/auth")

async function HandleSignUp(req,res){
   
    const {name,email,password}=req.body;
    // Check if the email already exists in the database

    await User.create({
        name,
        email,
        password
    })
    res.status(201).json({message:"User Created Successfully , login at /login"})
    
}

async function HandleLogin(req,res){
    // const {email,password}=req.body;
    // const isUser=await User.findOne({email,password});

    // // if  there is no such user or the password found in db:
    // if(!isUser){
    //     return res.status(401).json({message:"Invalid Email or Password"})
    // }
    // // if found set the cookie
    // const jwttoken=setUser(isUser);
    // res.cookie("cookieID",jwttoken);
    

    try {
        const {email,password}=req.body;
        const isUser=await User.findOne({email,password});
        const jwttoken=setUser(isUser);
        res.cookie("cookieID",jwttoken);
        const message = "User Logged In Successfully";
        const userData={
            user:jwttoken

           
        }

        const apiResponse = new ApiResponse(200, message, userData);
        res.status(apiResponse.statuscode).json(apiResponse);
        
    } catch (error) {
        
        const apiError=new ApiError(500,"user not found!",error.message);
        res.status(apiError.statuscode).json(apiError);

        
    }





}



module.exports={HandleSignUp,HandleLogin}