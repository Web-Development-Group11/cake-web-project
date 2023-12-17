
const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;

    if(!token) return res.status(401).json({message : "Unauthorized"});

    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err) return res.status(403).json({message : "Forbidden"});
        req.body.id = decoded.id;
        next();
    });
}