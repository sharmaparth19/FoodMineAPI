import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food !:Food;

  constructor(
    activatedRoutes:ActivatedRoute,
    foodServices:FoodService, 
    private cartService:CartService,
    private router:Router
    ){
    activatedRoutes.params.subscribe((params)=>{
      if(params.id){
        foodServices.getFoodById(params.id).subscribe(serverFoods =>{
          this.food = serverFoods;
        });
      }
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
