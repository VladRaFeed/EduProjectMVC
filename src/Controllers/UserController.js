const { UserModel } = require("../Models/UserModel")

const fetchUsers = (req,res) => {
    UserModel.find({}).then(function(users) {
        res.json(users)
    }).catch(function(err) {
        console.log(err)
    })
}

const createUser = (async(req, res) => {
    const data = req.body
    const newUser = {}
    if(data) {
        newUser._id = data._id
        newUser.name = data.name
        newUser.age = data.age
        }

    UserModel.create(newUser)

    res.status(201).json({
        code: 201, 
        status: "created",
        data: newUser
    })
})

const deleteUser = (async(req, res) => {
    const userId = req.params.id
    
    UserModel.findByIdAndDelete(userId).then(function(user) {
        if(user) {
            
            res.status(200).json({
                code: 200,
                status: "deleted",
            })

        } else {
            res.status(400).json({
                status: 400,
                message: "Користувача не знайдено!"
            })
        }
    }).catch(function(err) {
        console.log(err)
    })
})

const searchUserById = (async(req, res) => {
    const Userid = req.params.id

    UserModel.findById(Userid).then(function(user) {
        if(user) {
            res.status(200).json({
                status: 200,
                message: "Успішно знайдено користувача!",
                data: user
            })
        } else {
            res.status(400).json({
                status: 400,
                message: "Користувача не знайдено, спробуйте ще раз!"
            })
        }
    }).catch(function(err) {
        console.log(err)
    })
})

const changeUserName = (async(req, res) => {

    const id = req.body.id
    const newName = req.body.newName

    UserModel.findById(id).then(function(user) {
        if(user) {
            user.name = newName
            user.save()

            res.status(200).json({
                status: 200,
                message: "Ім'я успішно оновлено!",
                data: user
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


module.exports = {fetchUsers, createUser, deleteUser, searchUserById, changeUserName}