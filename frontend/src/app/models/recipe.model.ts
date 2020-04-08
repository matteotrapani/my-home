import {IIngredient} from './ingredient.model';
import {IRecipeStep} from './recipeStep.model';
import {BaseModel, IBaseModel} from './base.model';

export interface IRecipe extends IBaseModel {
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
    image: string;
}

export class Recipe extends BaseModel implements IRecipe {
  cookingTime: number;
  ingredients: [IIngredient];
  link: string;
  linkVideo: string;
  name: string;
  portions: number;
  preparationTime: number;
  restingTime: number;
  steps: [IRecipeStep];
  totalTime: number;
  image: string;
}
