import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../../services/recipes.service';
import {Recipe} from '../../models/recipe.model';
import SnackBarService from '../../services/snackbar.service';

@Component({
  template: ''
})
export class RecipeAddDialogEntryComponent {
  constructor(private bottomSheet: MatBottomSheet,
              private router: Router,
              private route: ActivatedRoute) {
    this.openDialog();
  }
  openDialog(): void {
    const bottomSheetRef = this.bottomSheet.open(RecipeAddComponent);
    bottomSheetRef.afterDismissed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  name: string;
  link: string;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<RecipeAddComponent>,
    private recipesService: RecipesService,
    private snackBarService: SnackBarService) { }

  ngOnInit(): void {
  }

  addRecipe(): void {
    const recipe = new Recipe();
    recipe.name = this.name;
    recipe.link = this.link;
    this.recipesService.add(recipe)
      .subscribe(
        async response => {
          this.bottomSheetRef.dismiss();
        },
        error => this.snackBarService.showError('An error occurred while adding a recipe')
      );
  }
}
