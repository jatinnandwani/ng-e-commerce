import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderCitySelectionComponent } from './header-city-selection/header-city-selection.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageBannnerComponent } from './home-page-bannner/home-page-bannner.component';
import { BestSellingItemComponent } from './best-selling-item/best-selling-item.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { SproductSearchComponent } from './sproduct-search/sproduct-search.component';
import { DeliverableCitiesService } from './deliverable-cities.service';
import { DeliveringCitiesService } from './delivering-cities.service';
import { ProductItemsListingService } from './product-items-listing.service';
import { ProductListingOwlService } from './product-listing-owl.service';
import { BestSellingItemServiceService } from './best-selling-item-service.service';

// import { NgSelect2Module } from 'ng-select2';
// import "webrtc";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCitySelectionComponent,
    ProductCategoryComponent,
    HomePageComponent,
    HomePageBannnerComponent,
    BestSellingItemComponent,
    SproductSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TabsModule.forRoot(),
    BrowserModule,
    OwlModule,
    SlickCarouselModule,
    FormsModule,
    SelectDropDownModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    
  ],
  providers: [DeliverableCitiesService, DeliveringCitiesService, ProductItemsListingService, ProductListingOwlService, BestSellingItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
