import mongoose, { Document, Schema } from "mongoose";
import { IIngredient, IngredientSchema } from "./ingredient.model";
import { IRecipeStep, RecipeStepSchema } from "./recipeStep.model";

const RecipeSchema: Schema = new Schema({
    cookingTime: {type: Number, required: false},
    ingredients: [IngredientSchema],
    link: {type: String, required: false},
    linkVideo: {type: String, required: false},
    name: {type: String, required: true},
    portions: {type: Number, required: true},
    preparationTime: {type: Number, required: false},
    restingTime: {type: Number, required: false},
    steps: [RecipeStepSchema],
    totalTime: {type: Number, required: true},
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
}

export const Recipe =  mongoose.model<IRecipe>("Recipe", RecipeSchema);
