import {Component, OnInit} from '@angular/core';
import {IRecipe} from '../../models/recipe.model';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipesService: RecipesService, private breakpointObserver: BreakpointObserver) {
  }
  recipes: Array<IRecipe> = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    this.recipesService.get().subscribe(data => this.recipes = data);
  }
}
