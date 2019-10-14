import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
  carouselOptions = {
    margin: 10,
    // nav: true,
    dots:false,
    
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    navClass: ['owl-prev','owl-next'],
      
    responsiveClass: true,
    
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 8  ,
        nav: true,
        loop: false,
        slideBy:8
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }

  images = [
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

  constructor() { }

  ngOnInit() {
  }

}
