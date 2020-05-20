import {IRecipe, Recipe} from '../models/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class RecipesService {
  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  get(): Observable<Array<IRecipe>> {
    return this.http.get<Array<IRecipe>>( `${this.serverUrl}api/recipes`);
  }

  getImagesByUrl(url: string): Observable<Array<string>> {
    return this.http.post<Array<string>>(`${this.serverUrl}api/recipes/imagesByUrl`, { url });
  }
  getImageDataToSave(url: string): Observable<Blob> {
    return this.http.post<Blob>(`${this.serverUrl}api/recipes/imageDataByUrl`, { url });
  }

  add(recipe: IRecipe): Observable<IRecipe> {
    return this.http.post<IRecipe>(`${this.serverUrl}api/recipes`, recipe);
  }
}
