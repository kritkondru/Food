import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {
myData:any;

  constructor(private http:HttpClient) { }


foodDetails() {
  this.http.get('assets/food.json')
  .subscribe( (data:any) => {
    this.myData=data;
    console.log(this.myData);
  });
  console.log(this.myData);
}
}