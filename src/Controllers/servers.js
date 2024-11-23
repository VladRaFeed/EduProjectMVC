const mongoose = require("mongoose")
const express = require("express")
const fetchUsers = require("./UserController")
const fetchAdvert = require("./AdvertisimentController")
const fetchCourses = require("./CoursesController")
const cors = require("cors")

const app = express()

app.use(cors())

mongoose.connect('mongodb+srv://yourHappyPet:ERNKQd7TeNi0726j@cluster0.2dvlxil.mongodb.net/educationproj-database')

app.get("/getUsers", fetchUsers)

app.get("/getAdvert", fetchAdvert)

app.get("/getCourses", fetchCourses)

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})