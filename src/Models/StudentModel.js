const mongoose = require("mongoose")

const StudentSchema = mongoose.Schema({
    Id: Number,
    Name: String,
    Surname: String,
    Email: String,
    Course: Number,
    Group: String
})

const StudentModel = mongoose.model("students", StudentSchema)

module.exports = {
    StudentModel
}