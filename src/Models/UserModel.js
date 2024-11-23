const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    _id: Number,
    name: String,
    age: Number
})

const UserModel = mongoose.model("users", userSchema)

module.exports = {
    UserModel
}