import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        default: [],
    },
     createdAt: {
        type: Date,
        default: Date.now,
    },

    role: {
        type: String,
        enum: ['user', 'admin','moderator'],
        default: 'user',
    },
})

export default mongoose.model("User", userSchema);