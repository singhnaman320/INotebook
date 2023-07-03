const express = require('express') // import
const router = express.Router();

// Create a user uning POST: "/api/auth/". doesn't require auth

router.get('/', (req, res) =>{

    console.log(req.body);
    res.send('Hello Naman')
})

module.exports = router