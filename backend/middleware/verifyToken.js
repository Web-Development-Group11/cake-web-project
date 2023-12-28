import jwt from "jsonwebtoken";

 export const verifyToken = async (req, res, next) => {
    
    const secretKey = process.env.SECRET_KEY;
    const token = await req.cookies.token;

    if(!token) return res.status(401).json({message : "Unauthorized"});
    try {
    const user = jwt.verify(token, secretKey, (err, decoded) => {
        if(err){ 
             res.status(403).json({message : "Forbidden"});
        } else {
        req.user = decoded;
        next();
        }
    });
} catch (error) {
    res.clearCookie("token");
    return res.status(500).json({message : error.message});
    }
}