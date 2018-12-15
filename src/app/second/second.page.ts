import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
fooddata:any;
id:any;
name:any;
price:any;
cuisine:any;
  constructor(private navigationdata:NavParams,private modalCtrl:ModalController) { }

  ngOnInit() {
this.fooddata=this.navigationdata.get('dishes');
console.log(this.fooddata)
this.id=this.fooddata.id;
this.name=this.fooddata.name;
this.price=this.fooddata.price;
this.cuisine=this.fooddata.cuisine;

  }
exit(){
this.modalCtrl.dismiss();
}
}
