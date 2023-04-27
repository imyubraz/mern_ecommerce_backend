// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        question: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "member"
        }
    }, { timestamps: true }
)

const userModel = mongoose.model("users", userSchema);

// module.exports = userModel;
export default userModel;