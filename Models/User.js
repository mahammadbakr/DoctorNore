const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
const config = require('../config')
const objId = mongoose.SchemaTypes.ObjectId


const User = new Schema({
    username: String,
    password: String,
    isDoctor: { type: Boolean, default: false },
    patient: {
        type: objId,
        ref: 'Patient'
    },
    doctor: {
        type: objId,
        ref: 'Doctor'
    },
    favorite: [{
        type: objId,
        ref: 'Doctor'
    }],
})

// create new User document
User.statics.create = function(username, password,isAdmin) {
    const encrypted = crypto.createHmac('sha1', config.secret)
                      .update(password)
                      .digest('base64')

    const user = new this({
        username,
        password: encrypted,
        isAdmin
    })

    // return the Promise
    return user.save()
}

// find one user by using username
User.statics.findOneByUsername = function(username) {
    return this.findOne({
        username
    }).exec()
}

// verify the password of the User documment
User.methods.verify = function(password) {
    const encrypted = crypto.createHmac('sha1', config.secret)
                      .update(password)
                      .digest('base64')
    console.log(this.password === encrypted)

    return this.password === encrypted
}



module.exports = mongoose.model('User', User)