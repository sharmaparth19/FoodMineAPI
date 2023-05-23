import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[]=[]

  constructor(
    private foodService:FoodService,
    activatedRoutes:ActivatedRoute
    ){
      let foodObservable: Observable<Food[]>
      activatedRoutes.params.subscribe((params)=>{
        if(params.searchTerm)
        foodObservable = this.foodService.getSearchFood(params.searchTerm)
        else if(params.tags)
        foodObservable = this.foodService.getAllFoodByTags(params.tags);
        else
        foodObservable = this.foodService.getAll();

        foodObservable.subscribe((serverFoods)=>{
          this.foods = serverFoods
        })
        
      })

  }


  ngOnInit(){

  }

}
