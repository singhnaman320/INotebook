const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Cod!ngN@m@n$Singh@J@v@$cript'  // To be safter we can send it through environment variable

const fetchUser = (req, res, next) =>{   // these params exctaly represents "getUser" params in auth.js like next here is async function there.

    // Get the user from the jwt token and add id to requested object
    const token = req.header('auth-token') // auth-token is name of header we have given. We will use this auth token with header

    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"});
    }

    try {
        
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next();

    } catch (error) {
        
        res.status(401).send({error: "Please authenticate using a valid token"});
    }

    
}

module.exports = fetchUser;