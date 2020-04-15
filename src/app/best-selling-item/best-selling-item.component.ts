import { Component, OnInit } from '@angular/core';
import { BestSellingItemServiceService } from '../best-selling-item-service.service';
@Component({
  selector: 'app-best-selling-item',
  templateUrl: './best-selling-item.component.html',
  styleUrls: ['./best-selling-item.component.css']
})
export class BestSellingItemComponent implements OnInit {
  slides = [];
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

  constructor(private _BestSellingItemServiceService : BestSellingItemServiceService) { 
    
  }

  ngOnInit() {
    this.slides = this._BestSellingItemServiceService.best_selling_list(); 
  }

}
