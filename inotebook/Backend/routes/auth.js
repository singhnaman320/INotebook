const express = require('express') // import
const router = express.Router();

router.get('/', (req, res) =>{

    obj = {
        a: 'naman',
        number: 55
    }

    res.json(obj);
})

module.exports = router