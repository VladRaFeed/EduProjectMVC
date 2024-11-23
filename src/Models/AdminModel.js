const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    Id: Number,
    Name: String,
    Surname: String,
    Email: String
})

const AdminModel = mongoose.model("admins", AdminSchema)

module.exports = {
    AdminModel
}