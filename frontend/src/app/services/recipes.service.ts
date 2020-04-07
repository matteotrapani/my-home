import {IRecipe, Recipe} from '../../models/recipe.model';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipesService {
  get(): Array<IRecipe> {
    const result: Array<IRecipe> = [];
    for (let i = 0; i < 10; i++) {
      const recipe: Recipe = new Recipe();
      recipe.id = i.toString();
      recipe.name = `Torta di mele ${i}`;
      result.push(recipe);
    }
    return result;
  }
}
