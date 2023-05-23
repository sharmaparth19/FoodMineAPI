import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm: '' = "";


  constructor(
    private router:Router,
    private foodService:FoodService,
    activatedRoutes:ActivatedRoute  ){

      activatedRoutes.params.subscribe((params)=>{
        if(params.searchTerm){
          this.searchTerm = params.searchTerm;
        }
      });
  }

  search(term:string):void{
    if(term){
      this.router.navigateByUrl('/search/' + term)
    }else{
      this.router.navigateByUrl('')
    }
  }

}
