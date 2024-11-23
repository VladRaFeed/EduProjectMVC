const { UserModel } = require("../Models/UserModel")

const fetchUsers = (req,res) => {
    UserModel.find({}).then(function(users) {
        res.json(users)
    }).catch(function(err) {
        console.log(err)
    })
}

module.exports = fetchUsers