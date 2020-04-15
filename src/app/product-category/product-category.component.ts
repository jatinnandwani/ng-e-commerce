import { Component, OnInit } from '@angular/core';
import { ProductListingOwlService } from '../product-listing-owl.service';
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

  images = [];

  constructor(private _ProductListingOwlService : ProductListingOwlService) { }

  ngOnInit() {
    this.images = this._ProductListingOwlService.getOwlProductLiting(); 
  }

}
