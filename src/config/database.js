import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {

    try {
        await mongoose.connect(config.mongodbUrl)
        console.log("Mongodb connected successfully!")
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;