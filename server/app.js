import express from "express";
// import { readFile, writeFile } from "fs/promises";
import contactmodel from "./models/Contact.js"
import "./dbconnect.js";
const app = express();
const port = 5000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello world");
});
app.post("/contact", async (req, res) => {
    // try {
    //     let fileData = await readFile("data.json");
    //     fileData = JSON.parse(fileData);
    //     const found = fileData.find(element => element.email == req.body.email);
    //     if (found) { return res.status(400).json({ error: "you have already contacted" }); }
    //     fileData.push(req.body);
    //     await writeFile("data.json", JSON.stringify(fileData));
    //     res.status(200).json({ success: "Your Form is Sent. Please wait for the email response" });
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ error: "Internal Server Error. Try Again" });
    // }

    try {
        const found = await contactmodel.findOne({email : req.body.email})
        if (found) { return res.status(400).json({ error: "you have already contacted" }); }
        const formData =new contactmodel(req.body)
        await formData.save();
        res.status(200).json({ success: "Your Form is Sent. Please wait for the email response" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error. Try Again" })
        
    }
});
app.listen(port, () => {
    console.log(`server started at ${port}`);
});
