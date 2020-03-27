import mongoose from "mongoose";

const connectionUrl = "mongodb://localhost:27017";
const dbName = "myHome";

mongoose.connect(`${connectionUrl}/${dbName}`, {
    useCreateIndex: true,
    useNewUrlParser : true,
    useUnifiedTopology: true
}).catch((err) => {
    console.error(err);
});

mongoose.connection.on("connected", () => {
    console.log("connected");
});
mongoose.connection.on("disconnected", () => {
    console.log("disconnected");
});
