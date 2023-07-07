const fs = require('fs')

const getCustomer = (res, req) =>{ 
    const data = fs.readFileSync('../customer.js')
    const result = JSON.parse((data))
    console.log(result)
    
    return res.status(200).json({result})
}
const createCustomer = (res,req) => {
    const customerID = req.body.customerID
    const customername = req.body.customername

    const data = fs.readFileSync()
    const result = JSON.parse(data)
    
    const newResult = [...result, {customerID, customername}]
    const writetoFile = fs.writeFileSync('customer.json', JSON.stringify(newResult))

    return res.status(200).json({
        message : " Create customer success"
    })
}

const deleteCustomer = (res,req) => {
    const deleteCustomer = req.params.id

    const data = fs.readFileSync()
    const result = JSON.parse(data)

    const newResult = result.filter(item => item.customerID != deleteCustomer)
    const writetoFile = fs.writeFileSync('customer.json', JSON.stringify(newResult))

    return res.status(200).json({
        message : "Delete customer success"
    })
}

module.exports = {
    getCustomer,
    createCustomer,
    deleteCustomer
}