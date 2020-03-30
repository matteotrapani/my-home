import express from 'express';
import * as path from 'path';
import recipesController from './controllers/recipesController';
import './db/mongoose';

const app = express();
const port = 8080; // default port to listen
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

app.get('*', (req, res) => {
    if (allowedExt.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`dist/my-home/${req.url}`));
    } else {
        res.sendFile(path.resolve('dist/my-home/index.html'));
    }
});
// define a route handler for the default home page
// app.get( '/', ( req, res ) => {
//     res.send( 'Hello world!' );
// } );
app.use('/recipes', recipesController);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
