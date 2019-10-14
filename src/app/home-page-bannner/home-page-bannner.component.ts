import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page-bannner',
  templateUrl: './home-page-bannner.component.html',
  styleUrls: ['./home-page-bannner.component.css'],
  providers: [ NgbCarouselConfig ]
})

export class HomePageBannnerComponent implements OnInit {
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  images = [
    {
      text: "Diwali Special",
      image: "assets/images/main-banner-1.jpg"
    },
    {
      text: "Grocery & Staple",
      image: "assets/images/main-banner-2.jpg"
    },
    {
      text: "Household Needs",
      image: "assets/images/main-banner-3.jpg"
    },
    {
      text: "Personal Care",
      image: "assets/images/main-banner-4.jpg"
    },
    {
      text: "Baby & Kids",
      image: "assets/images/main-banner-5.jpg"
    },
  ]

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 20000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
