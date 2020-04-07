import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from './material.module';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipeAddComponent, RecipeAddDialogEntryComponent} from './recipes/recipe-add/recipe-add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
    children: [
      { path: 'add', component: RecipeAddDialogEntryComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeAddDialogEntryComponent,
    RecipeAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
