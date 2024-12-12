const mongoose = require("mongoose")
const express = require("express")
const {fetchUsers, createUser, deleteUser, searchUserById, changeUserName} = require("./UserController")
const {fetchAdvert, createAdvert, deleteAdvert} = require("./AdvertisimentController")
const {fetchCourses, createCourse, deleteCourse, searchCourseByName, changeCourseNameAndInfo} = require("./CoursesController")
const cors = require("cors")
const { fetchMarksLists, createMarksList, updateMarksList, deleteMarksList, searchMarksListByGroupName } = require("./MarksListController")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('YourDatabaseLink')

app.get("/getUsers", fetchUsers)
app.post("/createUser", createUser)
app.delete("/deleteUser/:id", deleteUser)
app.get("/findUser/:id", searchUserById)
app.put("/changeUserName", changeUserName)
 
app.get("/getAdvert", fetchAdvert)
app.post("/createAdvert", createAdvert)
app.delete("/deleteAdvert/:id", deleteAdvert)

app.get("/getCourses", fetchCourses)
app.post("/createCourse", createCourse)
app.delete("/deleteCourse/:id", deleteCourse)
app.get("/searchCourse/:name", searchCourseByName)
app.put("/changeCourseNameAndInfo", changeCourseNameAndInfo)

app.get("/getMarksLists", fetchMarksLists)
app.post("/createMarksList", createMarksList)
app.put("/updateMarksList/:id", updateMarksList)
app.delete("/deleteMarksList/:id", deleteMarksList)
app.get("/searchMarksList/:groupName", searchMarksListByGroupName)

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})