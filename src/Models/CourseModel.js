const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    _id: Number,
    CourseName: String,
    CourseInfo: String,
    StudentsList: Array,
    TasksList: Array,
    AdvertisimentList: Array,
})
CourseSchema.set('versionKey', false);

const CoursesModel = mongoose.model("courses", CourseSchema)

module.exports = {
    CoursesModel
}