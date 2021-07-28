const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter a name!"]
    },
    image_url : {
        type : String,
        required : [true, "Please enter a image_url!"]
    },
    treasure_chests : {
        type : Number,
        required : [true, "Please enter the number of treasure chests!"]
    },
    catch_phrase : {
        type : String,
        required : [true, "Please enter a catch phrase!"]
    },
    crew_position : {
        type : String,
        required : [true, "Please enter the pirate's position!"]
    },
    peg_leg : {
        type : Boolean
    },
    eye_patch : {
        type : Boolean
    },
    hook_hand : {
        type : Boolean
    }
}, {timestamps : true})

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;