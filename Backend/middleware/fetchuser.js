const jwt = require("jsonwebtoken");
const JWT_SECRET = "IAMAGOODBOY";

const fetchuser = (req , res , next)=>{

    //Get user from jwt token and add id to req
    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error : "Please authentiate with a valid token"})
    }
    try{
        const data =  jwt.verify(token,JWT_SECRET)
        req.user = data.user
        next()
    }catch(error){
        res.status(401).send({error : "Please authentiate with a valid token"})
    }
}

module.exports = fetchuser;