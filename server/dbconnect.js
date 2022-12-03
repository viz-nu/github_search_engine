import mongoose  from "mongoose";
async function connectDB() {
    try {
        await mongoose.connect(`mongodb+srv://viz:viz1@ths.x4nrp2y.mongodb.net/contactform`)
        console.log("server connected to mongodb");
    } catch (error) {
console.log(error);
    }
}
connectDB();