function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const jwt = require("jsonwebtoken");
    const secret = require("../index");
    
    function adminMiddleware(req, res, next) {
    
        const token = req.headers.authorization;
        
        const words = token.split(" ");
    
        const jwtToken = words[1];
        const decodedvalue = jwt.verify(jwtToken,secret);
    
        if(decodedvalue.username){
            next();
        }else{
            res.json({
                msg:"you dont have authorization"
            })
        }
    }


}

module.exports = userMiddleware;