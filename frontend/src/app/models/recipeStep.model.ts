import {BaseModel, IBaseModel} from './base.model';

export interface IRecipeStep extends IBaseModel {
    number: number;
    title: string;
    description: string;
}

export class RecipeStep extends BaseModel implements IRecipeStep {
  description: string;
  number: number;
  title: string;
}
