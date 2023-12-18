import jwt from "jsonwebtoken";

 export const verifyToken = (req, res, next) => {
    
    const secretKey = process.env.SECRET_KEY;

    const token = req.cookies.token;

    if(!token) return res.status(401).json({message : "Unauthorized"});

    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err) return res.status(403).json({message : "Forbidden"});
        req.body.name = decoded.name;
        next();
    });
}