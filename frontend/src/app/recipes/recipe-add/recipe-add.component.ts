import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../../services/recipes.service';
import {Recipe} from '../../models/recipe.model';
import SnackBarService from '../../services/snackbar.service';
import {SwUpdate} from '@angular/service-worker';
import {Subscription} from 'rxjs';

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
export class RecipeAddComponent implements OnInit, OnDestroy {
  name: string;
  link: string;

  queryParameterSubscription: Subscription;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<RecipeAddComponent>,
    private recipesService: RecipesService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.queryParameterSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.queryParameterSubscription = this.route.queryParams.subscribe(params => {
      this.name = params.name;
      this.link = params.link;
    });
  }

  async addRecipe(): Promise<void> {
    const recipe = new Recipe();
    recipe.name = this.name;
    recipe.link = this.link;
    const self = this;
    function onError() {
      return error => self.snackBarService.showError('An error occurred while adding a recipe');
    }
    if (!recipe.image) {
      const imagesUrls =  await this.recipesService.getImagesByUrl(this.link).toPromise().catch(onError);
      if (imagesUrls.length > 0) {
        const recipeImages = await this.recipesService.getImageDataToSave(imagesUrls[0]).toPromise().catch(onError);
        if (recipeImages) {
          recipe.image = recipeImages as Blob;
        }
      }
    }
    this.recipesService.add(recipe)
      .subscribe(
        async response => {
          this.bottomSheetRef.dismiss();
        },
        onError()
      );
  }
}
