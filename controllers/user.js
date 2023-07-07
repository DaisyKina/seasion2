const fs = require('fs')
const readFile = require('../utils/readFile')


const getUser = (res, req) =>{ 
    const data = fs.readFileSync('user.json')
    const result = JSON.parse(data)
    
    return res.status(200).json({message : "get user success"})
}
const createUser = (res,req) => {
    const userId = req.body.userId
    const username = req.body.username

    const result = readFile('user.json')
    
    const newResult = [...result, {userId, username}]
    const writeToFile = fs.writeFileSync('user.json', JSON.stringify(newResult))

    return res.status(200).json({
        message : " Create user success"
    })
}

const deleteUser = (res,req) => {
    const deleteUser = req.params.id

    const data = fs.readFileSync()
    const result = readFile('user.json')

    const newResult = result.filter(item => item.userId != deleteUser)
    const writetoFile = fs.writeFileSync('user.json', JSON.stringify(newResult))

    return res.status(200).json({
        message : "Delete user success"
    })
}

module.exports = {
    getUser,
    createUser,
    deleteUser
}