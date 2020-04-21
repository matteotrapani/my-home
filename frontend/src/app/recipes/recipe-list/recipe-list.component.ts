import {Component, OnDestroy, OnInit} from '@angular/core';
import {IRecipe} from '../../models/recipe.model';
import {Observable, Subject} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {filter, map, pairwise, shareReplay, startWith, takeUntil} from 'rxjs/operators';
import {RecipesService} from '../../services/recipes.service';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  constructor(
    private recipesService: RecipesService,
    private breakpointObserver: BreakpointObserver,
    private router: Router) {
  }
  public destroyed = new Subject<any>();
  recipes: Array<IRecipe> = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.setAutoReloadOnFirstLoadAndRouteChange();
  }

  private setAutoReloadOnFirstLoadAndRouteChange() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      pairwise(),
      filter((events: RouterEvent[]) => events[0].url.startsWith(events[1].url)),
      startWith('Initial call'),
      takeUntil(this.destroyed)
    ).subscribe(() => {
      this.fetchRecipes();
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  fetchRecipes(): void {
    this.recipesService.get().subscribe(data => this.recipes = data);
  }
}
