const jwt =require("jsonwebtoken");
require('dotenv').config();

const jwt_key=process.env.JWT_SECRET_KEY

const setUser=(user)=>{
    const payload={
        _id:user._id,
        username:user.name,
        email:user.email
    
    }

    return jwt.sign(payload,jwt_key);

}

const getUser=(token)=>{
    // incase there is no token
    if(!token) return null

    // else
    try {
        jwt.verify(token,jwt_key)
        
    } catch (error) {
        return null
        
    }

}

module.exports={getUser,setUser};