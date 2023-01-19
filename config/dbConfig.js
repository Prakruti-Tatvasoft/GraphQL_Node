import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const db = mongoose.connect(
    `mongodb://127.0.0.1:27017/graphql`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to the database!");
    }).catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

export default db;
