import {UnitMeasure} from './contracts/unitMeasure';
import {BaseModel, IBaseModel} from './base.model';

export interface IIngredient extends IBaseModel {
    name: string;
    quantity: number;
    unitMeasure: UnitMeasure;
}

export class Ingredient extends BaseModel implements IIngredient {
  name: string;
  quantity: number;
  unitMeasure: UnitMeasure;
}
