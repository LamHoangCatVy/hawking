import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    userId:{
        type: String,
    },
    type : {
        type: String,
        required: [true, "Please provide a type"]
    },
    
});