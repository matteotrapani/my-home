import express from "express";
import recipesController from "./controllers/recipesController";
import "./db/mongoose";

const app = express();
const port = 8080; // default port to listen

app.use(express.json());
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );
app.use("/recipes", recipesController);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
