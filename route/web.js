
const express = require('express')
const route = express.Router()
const controller = require('../controller/usercontroller')

route.post('/add' , controller.adduser)
route.get('/get' , controller.getuser)

module.exports= route