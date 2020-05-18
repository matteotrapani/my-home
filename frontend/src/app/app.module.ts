import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

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
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {PwaService} from './services/pwa.service';
import {AlertComponent} from './alert/alert.component';

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

const initializer = (pwaService: PwaService) => () => pwaService.initPwa();

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeAddDialogEntryComponent,
    RecipeAddComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
