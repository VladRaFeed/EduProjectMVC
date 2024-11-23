const { CoursesModel } = require("../Models/CourseModel")

const fetchCourses = (req, res) => {
    CoursesModel.find({}).then(function(courses) {
        res.json(courses)
    }).catch(function(err) {
        console.log(err)
    })
}

module.exports = fetchCourses