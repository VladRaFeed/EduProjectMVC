const { AdvertisimentModel } = require("../Models/AdvertisimentModel")

const fetchAdvert = (req, res) => {
    AdvertisimentModel.find({}).then(function(adv) {
        res.json(adv)
    }).catch(function(err) {
        console.log(err)
    })
}

const createAdvert = (async(req,res) => {
    const data = req.body
    const newAdvert = {}
    if(data) {
        newAdvert._id = data._id
        newAdvert.User = data.User
        newAdvert.CreatedAt = Date.now()
        newAdvert.Text = data.Text
    }

    AdvertisimentModel.create(newAdvert)

    res.status(201).json({
        code: 201, 
        status: "created",
        data: newAdvert
    })
})

const deleteAdvert = (async(req, res) => {
    const advertId = req.params.id
    
    AdvertisimentModel.findByIdAndDelete(advertId).then(function(advert) {
        if(advert) {
            
            res.status(200).json({
                code: 200,
                status: "deleted",
            })

        } else {
            res.status(400).json({
                status: 400,
                message: "Оголошення не знайдено!"
            })
        }
    }).catch(function(err) {
        console.log(err)
    })
})


module.exports = {fetchAdvert, createAdvert, deleteAdvert}