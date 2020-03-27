import mongoose, { Document, Schema } from "mongoose";
import { UnitMeasure } from "../contracts/unitMeasure";

export const IngredientSchema: Schema = new Schema({
    name: {type: String, required: true, unique: false},
    quantity: {type: Number, required: true},
    unitMeasure: {type: Number, enum: UnitMeasure}
});

export interface IIngredient extends Document {
    name: string;
    quantity: number;
    unitMeasure: number;
}

export const Ingredient = mongoose.model<IIngredient>("Ingredient", IngredientSchema);
