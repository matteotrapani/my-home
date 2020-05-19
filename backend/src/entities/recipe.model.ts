import mongoose, { Document, Schema } from 'mongoose';
import { IIngredient, IngredientSchema } from './ingredient.model';
import { IRecipeStep, RecipeStepSchema } from './recipeStep.model';
import {IImage, ImageSchema} from './image.model';

const RecipeSchema: Schema = new Schema({
    cookingTime: {type: Number, required: false},
    ingredients: [IngredientSchema],
    link: {type: String, required: false},
    linkVideo: {type: String, required: false},
    name: {type: String, required: true},
    portions: {type: Number, required: false},
    preparationTime: {type: Number, required: false},
    restingTime: {type: Number, required: false},
    steps: [RecipeStepSchema],
    totalTime: {type: Number, required: false},
    image: ImageSchema
});

export interface IRecipe extends Document {
    name: string;
    portions: number;
    preparationTime: number;
    cookingTime: number;
    restingTime: number;
    totalTime: number;
    ingredients: [IIngredient];
    steps: [IRecipeStep];
    link: string;
    linkVideo: string;
    image: IImage;
}

export const Recipe =  mongoose.model<IRecipe>('Recipe', RecipeSchema);
