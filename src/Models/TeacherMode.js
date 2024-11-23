const mongoose = require("mongoose")

const TeacherSchema = mongoose.Schema({
    Id: Number,
    Name: String,
    Surname: String,
    Email: String,
    Subject: String,
    StudentsList: Array
})

const TeacherModel = mongoose.model("users", TeacherSchema)

module.exports = {
    TeacherModel
}