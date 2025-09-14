import mongooes from "mongoose";

export const connectDB = async () => {
    try {
        await mongooes.connect(process.env.MONGODB_CONNECTIONSTRING);

        console.log("database connected");
    } catch (error) {
        console.error("Error connecting to database: ", error);
        process.exit(1); // exit with error
    }
};
