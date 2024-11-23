const mongoose = require("mongoose")

const AdvertSchema = mongoose.Schema({
    _id: Number,
    User: String,
    CreatedAt: String,
    Text: String,
})

const AdvertisimentModel = mongoose.model("advertisiment", AdvertSchema)

module.exports = {
    AdvertisimentModel
}