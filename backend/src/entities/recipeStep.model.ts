import mongoose, { Document, Schema } from "mongoose";

export const RecipeStepSchema: Schema = new Schema({
    description: {type: String, required: true},
    number: {type: Number, required: true},
    title: {type: String, required: false},
});

export interface IRecipeStep extends Document {
    number: number;
    title: string;
    description: string;
}

export const RecipeStep = mongoose.model<IRecipeStep>("RecipeStep", RecipeStepSchema);
