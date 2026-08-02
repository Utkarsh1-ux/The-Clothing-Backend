import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("DB connected");
    });
    
    mongoose.connection.on("error", (err) => {
        console.error("MongoDB connection error:", err.message);
    });

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (error) {
        console.error("Failed to connect to MongoDB.");
        if (error.message.includes("ENOTFOUND")) {
            console.error("This usually happens if your MongoDB Atlas free cluster is paused due to inactivity. Please log in to MongoDB Atlas and resume it.");
        } else {
            console.error(error.message);
        }
    }
}

export default connectDB;