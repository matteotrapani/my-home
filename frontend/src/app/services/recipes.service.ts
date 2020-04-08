import {IRecipe, Recipe} from '../models/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class RecipesService {
  private recipes: Array<IRecipe> = [];
  recipesUpdated = new EventEmitter();
  // constructor() {
  //   for (let i = 0; i < 10; i++) {
  //     const recipe: Recipe = new Recipe();
  //     recipe.id = i.toString();
  //     recipe.name = `Torta di mele ${i}`;
  //     this.recipes.push(recipe);
  //   }
  // }

  get(): Array<IRecipe> {
    return this.recipes;
  }

  add(recipe: IRecipe): void {
    this.recipes.push(recipe);
    this.recipesUpdated.emit();
  }
}
