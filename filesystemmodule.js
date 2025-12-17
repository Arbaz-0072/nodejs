const fs= require('fs')
const { finished } = require('stream')

const a=fs.readFileSync('file.txt')
console.log(a.toString())

console.log("finished reading file")