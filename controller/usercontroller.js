

const user = require('../model/user')
const express = require('express')

const adduser = async (req, res) => {

    try {
        const { name } = req.body
        const checkname = await user.findOne({ name })
        if (checkname) {
            return res.status(404).json({ success: false, msg: "name already exists" })
        }

      
        const users = await new user({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            gender:req.body.gender
        })
        const result = await users.save()

        res.status(201).json({ success: true, msg: "data added successfully", data: result })

    } catch (error) {
        res.status(404).json({ success: false, msg: "data not found" })
    }
}

const getuser = async (req, res) => {

    try {
        const alldata = await user.find()
        if (!alldata) {
            res.status(404).json({ success: false, msg: "data not found" })
        }
        else {
            res.status(200).json({ success: true, msg: "data saved successfully", data: alldata })
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports={

    adduser, getuser
}