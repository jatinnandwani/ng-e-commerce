import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListingOwlService {

  constructor() { }

  getOwlProductLiting(){
    return [
      {
        text: "Diwali Special",
        image: "assets/images/category.jpg"
      },
      {
        text: "Grocery & Staple",
        image: "assets/images/category.jpg"
      },
      {
        text: "Household Needs",
        image: "assets/images/category-l0-18.jpg"
      },
      {
        text: "Personal Care",
        image: "assets/images/category-l0-163.jpg"
      },
      {
        text: "Baby & Kids",
        image: "assets/images/category-l0-7.jpg"
      },
      {
        text: "Beverages",
        image: "assets/images/category-l0-12.jpg"
      },
      {
        text: "Biscuits, Snacks & Chocolates",
        image: "assets/images/category-l0-13.jpg"
      },
      {
        text: "Noodles, Sauces & Instant Food",
        image: "assets/images/category-l0-15.jpg"
      },
      {
        text: "Break & Dairy",
        image: "assets/images/category-l0-14.jpg"
      },
      {
        text: "Home & Kitchen",
        image: "assets/images/category-l0-1047.jpg"
      },
      {
        text: "Furnishing & Home Needs",
        image: "assets/images/category-l0-1379.jpg"
      },
    ]
  }
}
