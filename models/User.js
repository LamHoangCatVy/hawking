import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    sessionToken:{
        type: String,
        unique: true
    },
    userId:{
        type: String,
        required: true
    },
    expiresAt:{
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        
    }
})

const Session = mongoose.model("Session", SessionSchema);
export default Session;