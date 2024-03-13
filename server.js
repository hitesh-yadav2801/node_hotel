var fs = require('fs')
var os = require('os')
var _ = require('lodash')
const notes = require('./notes')

var arr = ['Hi', 'Hello', 1, 1, 1.0, 1.2, true, false, true, 3.0, "Hi"]

var filter = _.uniq(arr)
console.log(filter)

console.log(notes.age)
var result = notes.addNumber(2,4);
console.log(result)

// var userInfo = os.userInfo()
// console.log(userInfo)
// console.log(userInfo.username)

// fs.appendFile("greeting.txt", 'Hi ' + userInfo.username + '!\n', () => {
//     console.log('File is created')
// })

//console.log(os)

//