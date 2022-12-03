import mongoose  from "mongoose";
async function connectDB() {
    try {
        await mongoose.connect(`mongo config`)
        console.log("server connected to mongodb");
    } catch (error) {
console.log(error);
    }
}
connectDB();
