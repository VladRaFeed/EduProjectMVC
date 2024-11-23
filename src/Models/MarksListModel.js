const mongoose = require("mongoose")

const MarksListSchema = mongoose.Schema({
    GroupName: String,
    StudentsList: Array,
    SubjectsList: Array,
    Teacher: String,
    Marks: Array
})

const MarksListModel = mongoose.model("marks", MarksListSchema)

module.exports = {
    MarksListModel
}