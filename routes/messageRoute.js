const express = require('express')
const mongoose = require('mongoose')
const MessageRoute = express.Router()

const MessageSchema = mongoose.Schema({
    role : String,
    content: String
})
const MessageModel = mongoose.model('/Message', MessageSchema)

MessageRoute.post('/save', (req, res)=>{
   
    MessageModel.insertMany(req.body)
    .then(dbres=>{
        res.send({status:'ok', result: dbres})
    })
})
MessageRoute.get('/all', (req, res)=>{
    MessageModel.find({}, {role:1, content:1, _id:0})
    .then(dbres=>{
        res.send({status:'ok', result: dbres})
    })
})


module.exports = MessageRoute