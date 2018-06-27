import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
teamA: number;
teamB: number;
  constructor(public navCtrl: NavController) {
    this.teamA = 0;
    this.teamB = 0;
  }
Click(){
 this.teamA +=1;
}
ClickTwo(){
  this.teamA +=2;

}
ClickThree(){
  this.teamA +=3;
}
Click1(){
  this.teamB +=2;
}
Click2(){
  this.teamB +=2;
}
Click3(){
  this.teamB +=3;
}
myClick() {
  this.teamA = 0;
  this.teamB = 0;
}
}
