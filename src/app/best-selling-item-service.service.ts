import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BestSellingItemServiceService {
  constructor() { }
  
  best_selling_list(){
    return [
      {
        img: "/assets/images/best-selling-1.jpg",
        description: "Fortune Sunlite Refined Sunflower Oil(Pouch)",
        discount: "22% OFF",
        quantity: "1 l",
        amount: "104",
        clubprice:"98"
      },
  
      {
        img: "/assets/images/best-selling-2.jpg",
        description: "Harpic Power Plus Original Toilet Cleaner - Pack of 2",
        discount: "18% OFF",
        quantity: "2x1 l",
        amount: "92",
        clubprice:"68"
      },
      {
        img: "/assets/images/best-selling-3.jpg",
        description: "Fortune Premium Kachi Ghani Pure Mustard oil Bottle",
        discount: "27% OFF",
        quantity: "1 l",
        amount: "210",
      },
      {
        img: "/assets/images/best-selling-4.jpg",
        description: 'Dash 44" x " Meghalaya Grass Super Saver Broom',
        discount: "21% OFF",
        quantity: "1 Unit",
        amount: "54",
      },
      {
        img: "/assets/images/best-selling-5.jpg",
        description: "Tata Sampann Unpolished Arhar Dal/Toor Dal",
        discount: "22% OFF",
        quantity: "1 Kg",
        amount: "82",
        clubprice:"64"
      },
      {
        img: "/assets/images/best-selling-6.jpg",
        description: "Dabour Red Toothpaste",
        discount: "21% OFF",
        quantity: "300g",
        amount: "72",
      },
        {
        img: "/assets/images/best-selling-1.jpg",
        description: "Sunfeast Dark Fantasy Choco Fills Cookie",
        discount: "12% OFF",
        quantity: "600g",
        amount: "65",
        clubprice:"45"
      }, {
        img: "/assets/images/best-selling-4.jpg",
        description: 'Dash 44" x " Meghalaya Grass Super Saver Broom',
        discount: "21% OFF",
        quantity: "1 Unit",
        amount: "54",
      },
      {
        img: "/assets/images/best-selling-5.jpg",
        description: "Tata Sampann Unpolished Arhar Dal/Toor Dal",
        discount: "22% OFF",
        quantity: "1 Kg",
        amount: "82",
        clubprice:"64"
      },
      {
        img: "/assets/images/best-selling-6.jpg",
        description: "Dabour Red Toothpaste",
        discount: "21% OFF",
        quantity: "300g",
        amount: "72",
      }, {
        img: "/assets/images/best-selling-4.jpg",
        description: 'Dash 44" x " Meghalaya Grass Super Saver Broom',
        discount: "21% OFF",
        quantity: "1 Unit",
        amount: "54",
      },
      {
        img: "/assets/images/best-selling-5.jpg",
        description: "Tata Sampann Unpolished Arhar Dal/Toor Dal",
        discount: "22% OFF",
        quantity: "1 Kg",
        amount: "82",
        clubprice:"64"
      },
      {
        img: "/assets/images/best-selling-6.jpg",
        description: "Dabour Red Toothpaste",
        discount: "21% OFF",
        quantity: "300g",
        amount: "72",
      },
    ]
  }
}
