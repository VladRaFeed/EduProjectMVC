const { CoursesModel } = require("../Models/CourseModel")

const fetchCourses = (req, res) => {
    CoursesModel.find({}).then(function(courses) {
        res.json(courses)
    }).catch(function(err) {
        console.log(err)
    })
}

const createCourse = (async(req, res) => {
    const data = req.body
    const newCourse = {}
    if(data) {
        newCourse._id = data._id
        newCourse.CourseName = data.CourseName
        newCourse.CourseInfo = data.CourseInfo
        newCourse.StudentsList = data.StudentsList
        newCourse.TasksList = data.TasksList
        newCourse.AdvertisimentList = data.AdvertisimentList
        }

        CoursesModel.create(newCourse)

    res.status(201).json({
        code: 201, 
        status: "created",
        data: newCourse
    })
})

const deleteCourse = (async(req, res) => {
    const userId = req.params.id
    
    CoursesModel.findByIdAndDelete(userId).then(function(course) {
        if(course) {
            
            res.status(200).json({
                code: 200,
                status: "deleted",
            })

        } else {
            res.status(400).json({
                status: 400,
                message: "Курс не знайдено!"
            })
        }
    }).catch(function(err) {
        console.log(err)
    })
})

const searchCourseByName = async (req, res) => {
    const courseName = req.params.name; // Отримуємо назву курсу з параметрів запиту

    try {
        const course = await CoursesModel.findOne({ CourseName: courseName });

        if (course) {
            res.status(200).json({
                status: 200,
                message: "Успішно знайдено курс!",
                data: course
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "Курс не знайдено, спробуйте ще раз!"
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            message: "Сталася помилка під час пошуку курсу."
        });
    }
};


const changeCourseNameAndInfo = (async(req, res) => {

    const id = req.body.id
    const newName = req.body.newName
    const newInfo = req.body.newInfo

    CoursesModel.findById(id).then(function(course) {
        if(course) {
            course.CourseName = newName
            course.CourseInfo = newInfo
            course.save()

            res.status(200).json({
                status: 200,
                message: "Ім'я успішно оновлено!",
                data: course
            })
        } else {
            res.status(400).json({
                status:400,
                message: "Користувача не знайдено!"
            })
        }
    }).catch(function(err) {
        console.log(err)
    })    
})

module.exports = {fetchCourses, createCourse, deleteCourse, searchCourseByName, changeCourseNameAndInfo}