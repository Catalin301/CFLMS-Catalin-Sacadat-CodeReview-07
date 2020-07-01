import { Component, OnInit } from '@angular/core';

@ Component({

selector: 'hero',

templateUrl: './hero.component.html',

styleUrls: [ './hero.component.css' ]

})

export class HeroComponent implements   OnInit {
	heroLine:string;
	heroText:string;
	heroSubT:string;
	heroBtn:string;



constructor() {
	this.heroLine="Welcome Traveler";
	this.heroText=".";
	this.heroSubT="";
	this.heroBtn="";
}

ngOnInit() {

}

}