const { AdvertisimentModel } = require("../Models/AdvertisimentModel")

const fetchAdvert = (req, res) => {
    AdvertisimentModel.find({}).then(function(adv) {
        res.json(adv)
    }).catch(function(err) {
        console.log(err)
    })
}

module.exports = fetchAdvert