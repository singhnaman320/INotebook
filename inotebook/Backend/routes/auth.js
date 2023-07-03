const express = require('express') // import
const router = express.Router();

router.get('/', (req, res) =>{

    console.log(req.body);
})

module.exports = router