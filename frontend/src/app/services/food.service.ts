import { Injectable } from '@angular/core';
import { sample_foods,sample_tags } from 'src/data';
import { Food } from '../shared/model/food';
import { Tags } from '../shared/model/tags';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http:  HttpClient
  ) { }

  getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL)
  }

  getSearchFood(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  }

  getAllTags():Observable<Tags[]>{
    return this.http.get<Tags[]>(FOODS_TAGS_URL)
  }

  getAllFoodByTags(tags:string):Observable<Food[]>{
    return tags === 'All'?
    this.getAll():
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tags)
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId)

  }
}
