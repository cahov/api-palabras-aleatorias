const fs = require('fs')

const randomWord = async (category) =>{
    try{
        const jsonData = await fs.promises.readFile('./src/files/words.json', 'utf-8')
        const data = JSON.parse(jsonData)
        let randomWord
        if (category=='all'){
            const allWords = Object.values(data).flat();
            const randomIndex = Math.floor(Math.random() * allWords.length)
            randomWord = allWords[randomIndex]
        }else{
            const words = data[category]
            const randomIndex = Math.floor(Math.random() * words.length)
            randomWord = words[randomIndex]
        }
        return randomWord
    }catch (err){
        console.log(err)
    } 
    
}

module.exports = randomWord
