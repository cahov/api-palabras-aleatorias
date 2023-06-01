const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word
router.get('/palabra', async (req, res) =>{
    try {
        const word = await randomWord('all')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    }
})

module.exports = router