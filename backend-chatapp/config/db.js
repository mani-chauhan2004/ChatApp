import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const createDB = async() => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the database at ", Date.now());
    }catch(e) {
        console.error("Failed to connect to the database:", e);
        process.exit(1);
    }
}

export default createDB;