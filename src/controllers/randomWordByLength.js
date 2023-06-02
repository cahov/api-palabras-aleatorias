const fs = require('fs')

const randomWordByLength = async (category, length) => {
    try {
      const jsonData = await fs.promises.readFile('./src/files/words.json', 'utf-8')
      const data = JSON.parse(jsonData)
      let randomWord;
  
      if (category === 'all') {
        const allWords = Object.values(data).flat();
        const wordsWithLength = allWords.filter(word => word.length === length)
        if (wordsWithLength.length === 0) {
          throw new Error('No se encontro palabra con la longitud deseada')
        }
        const randomIndex = Math.floor(Math.random() * wordsWithLength.length)
        randomWord = wordsWithLength[randomIndex]
      } else {
        const words = data[category]
        const wordsWithLength = words.filter(word => word.length === length)
        if (wordsWithLength.length === 0) {
          throw new Error('No se encontro palabra con la longitud deseada')
        }
        const randomIndex = Math.floor(Math.random() * wordsWithLength.length)
        randomWord = wordsWithLength[randomIndex]
      }
      return randomWord
    } catch (err) {
      throw err
    }
  };

module.exports = randomWordByLength
