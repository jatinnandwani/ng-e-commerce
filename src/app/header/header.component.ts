import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

//For My Product Search box



export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

//end of my product Search Box
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
  public topsearchdcities = [
        {
          image : '/assets/images/bengaluru-78062ed.webp',
          text  : 'Bengaluru'
        },
        {
          image : '/assets/images/delhi-8cb9a0a.webp',
          text  : 'Delhi'
        },
        {
          image : '/assets/images/gurugram-dcd6b56.webp',
          text  : 'Gurugram'
        },
        {
          image : '/assets/images/hyderabad-bafc7e9.webp',
          text  : 'Hyderabad'
        },
        {
          image : '/assets/images/kolkata-f960233.webp',
          text  : 'Kolkata'
        }
  ]
        
cities = new FormControl();
options: string[] = ['Delhi', 'Mumbai', 'Banglore','Punjab','Himachal Pradesh','Hyderabad','chennai','Pune','Himachal Pradesh','Hyderabad',];
filteredOptions : Observable<string[]>;

public  createFilterFor(query) {
  var lowercaseQuery = query.toLowerCase();

  return function filterFn(state) {
    return (state.value.indexOf(lowercaseQuery) === 0);
  };

}

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.cities.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  // For my product search box

  // for my product Seach box 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  open_cart(){
    this.show = !this.show;
  }

  selectionChanged(){

  }

}

