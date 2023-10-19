// const { default: mongoose } = require("mongoose")

module.exports = {
    mutipleMongsooseToObject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose) {
        return mongoose? mongoose.toObject() : mongoose;
    }
};