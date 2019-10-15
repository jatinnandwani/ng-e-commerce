import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-selling-item',
  templateUrl: './best-selling-item.component.html',
  styleUrls: ['./best-selling-item.component.css']
})
export class BestSellingItemComponent implements OnInit {
  slides = [
    {
      img: "/assets/images/best-selling-1.jpg",
      description: "Fortune Sunlite Refined Sunflower Oil(Pouch)",
      discount: "22% OFF",
      quantity: "1 l",
      amount: "104"
    },

    {
      img: "/assets/images/best-selling-2.jpg",
      description: "Harpic Power Plus Original Toilet Cleaner - Pack of 2",
      discount: "18% OFF",
      quantity: "2x1 l",
      amount: "92"
    },
    {
      img: "/assets/images/best-selling-3.jpg",
      description: "Fortune Premium Kachi Ghani Pure Mustard oil Bottle",
      discount: "27% OFF",
      quantity: "1 l",
      amount: "210"
    },
    {
      img: "/assets/images/best-selling-4.jpg",
      description: 'Dash 44" x " Meghalaya Grass Super Saver Broom',
      discount: "21% OFF",
      quantity: "1 Unit",
      amount: "54"
    },
    {
      img: "/assets/images/best-selling-5.jpg",
      description: "Tata Sampann Unpolished Arhar Dal/Toor Dal",
      discount: "22% OFF",
      quantity: "1 Kg",
      amount: "82"
    },
    {
      img: "/assets/images/best-selling-6.jpg",
      description: "Dabour Red Toothpaste",
      discount: "21% OFF",
      quantity: "300g",
      amount: "72"
    },
      {
      img: "/assets/images/best-selling-1.jpg",
      description: "Sunfeast Dark Fantasy Choco Fills Cookie",
      discount: "12% OFF",
      quantity: "600g",
      amount: "65"
    }
  ];
  slideConfig = {
                 "slidesToShow": 5,
                 "slidesToScroll": 5,
                 "slidesBy":5,
                 "arrows": true,
                 "infinite": false,
                 //"centerPadding": '40px',
                
                };
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit() {
  }

}
