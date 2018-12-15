import { Component } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ModalController } from '@ionic/angular';
import { SecondPage } from '../second/second.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fdata:any
constructor(public fooddservice:FoodserviceService,private modalCtr:ModalController){}
ngOnInit(){
  this.fooddata();
}
  
  fooddata(){
this.fooddservice.foodDetails();
  }

  async showdetail(event){
    console.log(event.srcElement.innerHTML)
    for(let i=0;i<10;i++){
      console.log(this.fooddservice.myData.dishes[i].name);
      if(event.srcElement.innerHTML==this.fooddservice.myData.dishes[i].name){
        this.fdata=this.fooddservice.myData.dishes[i];
        console.log(this.fdata);
      }
    }
  const modal= await this.modalCtr.create({
    component:SecondPage,
    componentProps:{dishes:this.fdata}
  });
  modal.present();
  }
}
