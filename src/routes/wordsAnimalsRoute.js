const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category animals
router.get('/palabra/animal', async (req, res) =>{
    try {
        const word = await randomWord('animales')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    }
})

router.get('/palabra/animal/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('animales',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router