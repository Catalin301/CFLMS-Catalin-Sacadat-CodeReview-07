import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CartService} from '../cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	offers;
	checkoutForm;
  price;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
         this.checkoutForm = this.formBuilder.group({
     name: '',
     address: ''
   });
 }

  ngOnInit(){
  	this.offers=this.cartService.getOffers();
    this.price = this.cartService.getPrice();

    setTimeout (() => {
        console.log(this.price);
         if(parseInt(this.price) >= 500) {
          alert("You get 20% off your purchase!");
        } else if(parseInt(this.price) >=200) {
          alert("You get 10% off your purchase!");
        }
      }, 500);
  }

  addToCart(offer) {
  	this.cartService.addToCart(offer);
  }

  onSubmit(customerData) {
  	console.log(customerData);
  	//this.cartService.logCart();
  	this.offers = this.cartService.clearCart();
  	this.checkoutForm.reset();
  }

 /* ngAfterViewInit(){
    console.log("alert");
    if(this.price >= 200) {
      alert("Hello! I am an alert box!");
    }
  }*/
}
