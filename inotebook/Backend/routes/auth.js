const express = require('express') // import
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser')

const JWT_SECRET = 'Cod!ngN@m@n$Singh@J@v@$cript'

// ROUTE-1: Create a user using POST: "/api/auth/createUser". doesn't require auth. No login required

router.post('/createUser', [
    // Validations are to be written here in routes
    body('name', 'Enter a valid name !').isLength({min: 3}),
    body('email', 'Enter a valid email !').isEmail(),
    body('password', 'Enter a valid password !').isLength({min: 8})
], async (req, res) =>{
    // if there are errors, return bad request and the errors
   const result = validationResult(req)
   if(!result.isEmpty()){
    return res.status(400).json({errors: result.array()});
   }

   try {
    
        // Creating a user and checking whether the user with this email already exists
        let user = await User.findOne({email : req.body.email});
        if(user){
            return res.status(400).json({error: "sorry.!, a user with this email already exists"})
        }
        // Bcrypting Password
        const salt = await bcrypt.genSalt(10);
        const securedPasswordHash = await bcrypt.hash(req.body.password, salt)
        user = await User.create({

            name : req.body.name,
            email : req.body.email,
            password : securedPasswordHash

        })

        const data = {
            user:{
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET) //Jwt signing
        console.log(authToken);

        res.json({authToken})

        //.then(user => res.json(user))
        //.catch(err => {console.log(err) // If you provide duplicate data it will provide you an error 
        //res.json({result: 'Please enter a unique data'})}
        //);

        // const user = User(req.body);
        // user.save()
        // res.send(req.body)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Some error occured..!");
        // In real time we have to send this error to Logger
    }

})

// ROUTE-2: Authenticate a user using POST: "/api/auth/login".

router.post('/login', [
    body('email', 'Enter a valid email !').isEmail(),
    body('password', 'Password can not be blank!').exists()
], async (req, res) =>{

   const result = validationResult(req)
   if(!result.isEmpty()){
    return res.status(400).json({errors: result.array()});
   }

   // Extracting password from request.body
    const {email, password} = req.body;

    try {
        
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please enter correct login credentials.!"})
        }

        // Comparing given password with saved password, compare() returns boolean value
        const comparePassword = await bcrypt.compare(password, user.password); 
        if(!comparePassword){
            return res.status(400).json({error: "Please enter correct login credentials.!"})
        }

        // Payload is data of user that we will send. Similar as above data.
        const payload = {
            user:{
                id: user.id
            }
        }

        const authToken = jwt.sign(payload, JWT_SECRET) //Jwt signing
        res.json({authToken})

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error occured..!");
        // In real time we have to send this error to Logger
    }
})

// ROUTE-2: Get LoggedIn user using POST: "/api/auth/getUser". Login required here.

//we have to send JWT Token here

router.post('/getUser', fetchUser, async (req, res) =>{

    try {
        
        userId = req.user.id
        const user = await User.findById(userId).select("-password") // Password should not be fetched in get request
        res.send(user) // must send response

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error occured..!");
        // In real time we have to send this error to Logger
    }
})


module.exports = router
