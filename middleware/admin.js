// Middleware for handling auth

const jwt = require("jsonwebtoken");
const {JWT_secret} = require("../config");

function adminMiddleware(req, res, next) {

    const token = req.headers.authorization;
    
    const words = token.split(" ");

    const jwtToken = words[1];
    const decodedvalue = jwt.verify(jwtToken,JWT_secret);

    if(decodedvalue.username){
        next();
    }else{
        res.json({
            msg:"you dont have authorization"
        })
    }
}

module.exports = adminMiddleware;