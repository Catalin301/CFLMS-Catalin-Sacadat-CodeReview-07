import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { CartService} from '../cart.service';
@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

info = new FormGroup({

   destination: new FormControl(''),
   description: new FormControl(''),
   startDate: 	new FormControl(''),
   duration:	new FormControl(''),
   price:		new FormControl(''),
   img: new FormControl(''),
   Btn: new FormControl(''),

 });


  location= new FormControl('');


dest=[{

	destination:"Germany",
	description:"Berlin is cool",
	startDate:"06.05.2020",
	duration:"3 Days",
	price:"230",
  img:"assets/imgCR7/berlin.jpeg",
  Btn:"Fly Now",
},

{
  destination:"Dubai",
  description:"Dubai is cool",
  startDate:"06.05.2020",
  duration:"5 Days",
  price:"650",
  img:"assets/imgCR7/dubai.jpg",
  Btn:"Fly Now",
},

{
  destination:"Austria",
  description:"Vienna is cool",
  startDate:"06.05.2020",
  duration:"2 Days",
  price:"150",
  img:"assets/imgCR7/vienna.jpg",
  Btn:"Fly Now",
},

{
  destination:"America",
  description:"New York is cool",
  startDate:"06.05.2020",
  duration:"5 Days",
  price:"570",
  img:"assets/imgCR7/newyorkcity.jpg",
  Btn:"Fly Now",
},

{
  destination:"Spain",
  description:"Madrid is cool",
  startDate:"06.05.2020",
  duration:"3 Days",
  price:"180",
  img:"assets/imgCR7/madrid.jpg",
  Btn:"Fly Now",
},

{
  destination:"Italy",
  description:"Venedig is cool",
  startDate:"06.05.2020",
  duration:"2 Days",
  price:"150",
  img:"assets/imgCR7/venedig.jpg",
  Btn:"Fly Now",
},

{
  destination:"Brazil",
  description:"Rio de Janeiro is cool",
  startDate:"06.05.2020",
  duration:"4 Days",
  price:"460",
  img:"assets/imgCR7/brazil.jpg",
  Btn:"Fly Now",
}
];

  constructor(private cartService: CartService) {}


  ngOnInit(){
  }

  updateSearch() {
    this.location.setValue('Vienna'); 
    console.log("update search");
  }

  addToCart(offer){
    this.cartService.addToCart(offer);
  }

}



 
