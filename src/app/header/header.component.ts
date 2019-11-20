import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DeliverableCitiesService } from '../deliverable-cities.service';

interface getCityInt {
  cityName : string,
  cityId : number 
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  public show:boolean     = false;
  public buttonName:any   = 'Show';
  public toogle_cart      = 'hide_cart';
  public header_heading   = 'Flat Rs.100 Cashback | Code: HAPPY100 | Min Order: Rs.1500';
  public selectedValue = null;               
  public topsearchdcities = [];
         
  cities = new FormControl();
  citiesoptions: string[] = ['Delhi', 'Mumbai', 'Banglore','Punjab','Himachal Pradesh','Hyderabad','chennai','Pune','Himachal Pradesh','Hyderabad','Talangana'];
  filteredOptions : Observable<string[]>;

  getCities = new FormControl();
  getCityInt = [
    { cityName : 'Delhi' , 'id' : 1},
    { cityName : 'Mumbai' , 'id' : 2},
    { cityName : 'Banglore' , 'id' : 3},
    { cityName : 'Punjab' , 'id' : 4},
    { cityName : 'Himachal Pradesh' , 'id' : 5},
    { cityName : 'Hyderabad' , 'id' : 6},
    { cityName : 'chennai' , 'id' : 7},
    { cityName : 'Pune' , 'id' : 8},
    { cityName : 'Talangana' , 'id' : 9},
    { cityName : 'Gaziabad' , 'id' : 10},
    { cityName : 'Rajasthan' , 'id' : 11},
    { cityName : 'Gujarat' , 'id' : 12 }  
  ]


  constructor(private _deliverableCitiesService : DeliverableCitiesService) { }

  ngOnInit() {
    this.filteredOptions = this.cities.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.topsearchdcities = this._deliverableCitiesService.topSearchedCities();
    
    this.citiesOptions = this.cities.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    ); 


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.citiesoptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  open_cart(){
    this.show = !this.show;
  }

  selectionChanged(){

  }

}

