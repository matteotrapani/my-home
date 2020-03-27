import mongodb from "mongodb";
import mongoose from "mongoose";

const connectionUrl = "mongodb://localhost:27017";
const dbName = "myHome";
const mongoclient = mongodb.MongoClient;

mongoclient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        // tslint:disable-next-line:no-console
        return console.log(err);
    }

    const db = client.db(dbName);

    // tslint:disable-next-line:no-console
    console.log("Connected to the database");
});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// export default mongoose;
