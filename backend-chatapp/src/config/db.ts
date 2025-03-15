import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI: string | undefined = process.env.MONGO_URI;

const createDB = async(): Promise<void> => {
    try {
        if(!MONGO_URI) {
            throw new Error("MONGO_URI is not set in the environment variables");
        }
        await mongoose.connect(MONGO_URI);
        console.log("Connected to the database at ", Date.now());
    }catch(e) {
        console.error("Failed to connect to the database:", e);
        process.exit(1);
    }
}

export default createDB;