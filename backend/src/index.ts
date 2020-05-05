import express from 'express';
import cors from 'cors';
import path from 'path';
import recipesController from './controllers/recipesController';
import './db/mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import compression from 'compression';
import * as fs from 'fs';
import spdy from 'spdy';
import { Request, Response, NextFunction} from 'express';
import {sslRedirect} from './middlewares/sslRedirect.middleware';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080; // default port to listen

const sslOptions = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert:  fs.readFileSync(__dirname + '/server.crt')
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    .use(bodyParser.json())
    // enable text compression
    .use(compression())
    .use(cors())
    .use(express.static(__dirname + '/frontend'));

app.use('/api/recipes', recipesController);

app.use(sslRedirect);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/frontend/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

// spdy
//     .createServer(sslOptions, app)
//     .listen(port, () => {
//         console.log( `server started at https://localhost:${ port }` );
//     });
// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
