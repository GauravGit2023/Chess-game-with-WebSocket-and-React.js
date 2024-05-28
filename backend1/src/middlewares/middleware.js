const { json } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");


export const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authentication;
    const words = authHeader.split("");
    const token = words[1];

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(413),json({});
    }

    try{
        const decodedValue = jwt.verify(token, JWT_SECRET);
        req.userId = decodedValue.userId;
        next();
    } catch(e){
        return res.status(403).json({
            msg: "Authentication failed"
        })
    }
}