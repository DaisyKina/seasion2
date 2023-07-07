const userRouter = require ('express').Router()
const {getUser, createUser, deleteUser} = require('../controllers/user')

userRouter.get('/', getUser)
userRouter.post('/', createUser)
userRouter.delete('/:id', deleteUser)

module.exports = userRouter