import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

export default connection;