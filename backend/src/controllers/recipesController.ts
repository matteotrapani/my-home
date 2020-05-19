import express from 'express';
import { Recipe } from '../entities/recipe.model';
import {scrapeImages} from 'node-images-scraper';

const router = express.Router();

router.get('/', (req, res) => {
    Recipe.find()
        .then((value) => {
            res.send(value);
        }).catch((err) => {
            res.status(500).send(err);
        });
});

router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then((value) => {
            res.send(value);
        }).catch((err) => {
            res.status(500).send(err);
        });
});

router.post('/', (req, res) => {
    const recipe = new Recipe(req.body);
    recipe.save()
        .then((value) => {
            res.status(201).send(value);
        }).catch((err) => {
            res.status(500).send(err);
        });
});

router.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
        .then((value) => {
            res.send();
        }).catch((err) => {
            res.status(500).send(err);
        });
});

router.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then((value) => {
            res.send();
        }).catch((err) => {
            res.status(500).send(err);
        });
});

router.post('/imagesByUrl',async (req, res) => {
    const result = await scrapeImages(req.body.url);
    res.send(result.slice(0, 10));
});


export default router;
