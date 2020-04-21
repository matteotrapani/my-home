import express from 'express';
import cors from 'cors';
import path from 'path';
import recipesController from './controllers/recipesController';
import './db/mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080; // default port to listen
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.ttf',
    '.svg',
    '.woff',
    '.woff2',
];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
if (process.env.NODE_ENV === 'development') {
    const corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    app.use('/api/recipes', cors(corsOptions), recipesController);
} else {
    app.use('/api/recipes', recipesController);
}
app.get('*', (req, res) => {
    if (allowedExt.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`dist/my-home/${req.url}`));
    } else {
        res.sendFile(path.resolve('dist/my-home/index.html'));
    }
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
