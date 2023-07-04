const jwt = require('jsonwebtoken');

const fetchuser = (req, res, next) =>{   // these params exctaly represents "getUser" params in auth.js like next here is async function there.

    // Get the user from the jwt token and add id to requested object
    const token = req.header('auth-token') // auth-token is name of header we have given

    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"});
    }

    try {
        
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data.user
        next();

    } catch (error) {
        
        res.status(401).send({error: "Please authenticate using a valid token"});
    }

    
}

module.exports = fetchUser;