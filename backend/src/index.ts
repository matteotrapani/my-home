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
// enable text compression
app.use(compression());
app.use('/api/recipes', cors(), recipesController);
app.get('*', (req, res) => {
    if (allowedExt.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`dist/frontend/${req.url}`));
    } else {
        res.sendFile(path.resolve('dist/frontend/index.html'));
    }
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
