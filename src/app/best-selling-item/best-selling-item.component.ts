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
  ];
  slideConfig = {
                //  "slidesToShow": 5,
                //  "slidesToScroll": 5,
                //  "slidesBy":5,
                //  "arrows": true,
                //  "infinite": false,
               
                "slidesToShow": 5, 
                "slidesToScroll": 5,
                "nextArrow":"<button class='cust-best-selling-right-nav nav-btn next-slide'><div class='best-selling-carousel-arrow-right'><i class='fa fa-chevron-right'></i></div></button>",
                "prevArrow":"<button class='cust-best-selling-left-nav nav-btn prev-slide'><div class='best-selling-carousel-arrow-left'><i class='fa fa-chevron-left'></div></i></button>",
                "arrows": true,
                "dots":false,
                "infinite": false,
                "currentSlide":true,
                
                };
                
  slickInit(slick) {
    console.log('slick initialized');
    console.log(slick.slick.$prevArrow.hide());
    // console.log(slick.slick.$slides.find('data-slick-index'));
    // console.log(slick.slick.currentSlide);
    // console.log(slick.slick.$slides);
    // console.log(slick);
    // // console.log(slick.slick.$slides[0].children[1])
    // if(slick.slick.$slides.data().slickIndex == 0){
    //   slick.slick.$prevArrow.hide();
    // }else{
    //   slick.slick.$prevArrow.show();
    // }
    // if(slick.slick.$slides == 1){
    //   slick.slick.$prevArrow.hide();
    // }
    // console.log(slick.slick.$slides[0]);
    // slick.slick.$prevArrow

    // if(slick.slick.currentSlide == 1){
    //     slick.slick.$prevArrow.hide();
    //    }

    
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
    console.log(e.currentSlide);
    if(e.currentSlide == 0){
      console.log(e.slick.$prevArrow.hide());
    }
    else{
      console.log(e.slick.$prevArrow.show());
    }

    if(e.currentSlide == 10){
      console.log(e.slick.$nextArrow.hide());
    }
    else{
      console.log(e.slick.$nextArrow.show());
    }
  }
  
  beforeChange(e) {
    console.log('beforeChange');
    console.log(e.currentSlide);
    if(e.currentSlide == 0){
      console.log(e.slick.$prevArrow.hide());
    }
    else{
      console.log(e.slick.$prevArrow.show());
    }

    if(e.currentSlide == 10){
      console.log(e.slick.$nextArrow.hide());
    }
    else{
      console.log(e.slick.$nextArrow.show());
    }
  }

  constructor() { 
    
  }

  ngOnInit() {
  }

}
