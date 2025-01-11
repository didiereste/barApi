const jwt=require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

function createToken (payload) {
    return jwt.sign(payload, jwtSecret, { expiresIn: '2h'});
}

function verifyToken(token) {
    return jwt.verify(token, jwtSecret);
}

module.exports= { createToken, verifyToken };