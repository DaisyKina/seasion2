const customersRouter = require ('express').Router()
const {getCustomer, createCustomer, deleteCustomer} = require ("../controllers/customer")

customersRouter.get('/', getCustomer)
customersRouter.post('/', createCustomer)
customersRouter.delete('/:id', deleteCustomer)

module.exports = customersRouter