const mongoose = require("mongoose")
const express = require("express")
const {fetchUsers, createUser, deleteUser, searchUserById, changeUserName} = require("./UserController")
const fetchAdvert = require("./AdvertisimentController")
const {fetchCourses, createCourse, deleteCourse, searchCourseByName, changeCourseNameAndInfo} = require("./CoursesController")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://yourHappyPet:ERNKQd7TeNi0726j@cluster0.2dvlxil.mongodb.net/educationproj-database')

app.get("/getUsers", fetchUsers)
app.post("/createUser", createUser)
app.delete("/deleteUser/:id", deleteUser)
app.get("/findUser/:id", searchUserById)
app.put("/changeUserName", changeUserName)

app.get("/getAdvert", fetchAdvert)

app.get("/getCourses", fetchCourses)
app.post("/createCourse", createCourse)
app.delete("/deleteCourse/:id", deleteCourse)
app.get("/searchCourse/:name", searchCourseByName)
app.put("/changeCourseNameAndInfo", changeCourseNameAndInfo)

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})