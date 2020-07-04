const fs = require('fs')

//Read from file and parse data to JSON
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const book = JSON.parse(dataJSON)
// console.log(book.title)

//Code below to write to JSON file.
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)



// Stringify converts JSON object to string
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// // Parse converse string to JSON object
// const bookParse = JSON.parse(bookJSON)
// console.log(bookParse)

//Read in File
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const parsedFile = JSON.parse(dataJSON)

// Change data
parsedFile.name = 'JR Charles'
parsedFile.age = '33'

// Convert to string
const stringFile = JSON.stringify(parsedFile)

// Write to file
fs.writeFileSync('1-json.json', stringFile)