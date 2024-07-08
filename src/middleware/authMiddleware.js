const authMiddleware  = (req, res , next)=>{
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }
        req.userId = decoded.userId;
        next();
    });
}
export default authMiddleware;