import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	offers = [];
  price;
  constructor() { }

  addToCart(offer) {
    var tmp = 0;
  	this.offers.push(offer);

    this.offers.forEach(function (value) {
      tmp += parseInt(value.price);
    });

    if(tmp >= 500) {
      tmp = tmp*0.8;
    } else if(tmp >= 200) {
      tmp = tmp * 0.9;
    }

    this.price = Math.floor(tmp*100)/100;
  }

  getOffers() {
  	return this.offers;
  }

  clearCart() {
  	this.offers = [];
  	return this.offers;
  }

  getPrice() {
    return this.price;
  }
  /*logCart() {
    console.log("offers " + this.offers);
  }*/
}
