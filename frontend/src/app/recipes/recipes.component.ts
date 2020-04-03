import { Component, OnInit } from '@angular/core';
import {IRecipe, Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Array<IRecipe>;

  constructor() { }

  ngOnInit(): void {
    this.recipes = this.loadRecipes();
  }

  loadRecipes(): Array<IRecipe> {
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
