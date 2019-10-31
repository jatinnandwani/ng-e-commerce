import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  itemtype: string;
  name: string;
  id: number;
  flag:string;
}

@Component({
  selector: 'app-sproduct-search',
  templateUrl: './sproduct-search.component.html',
  styleUrls: ['./sproduct-search.component.css']
})
export class SproductSearchComponent implements OnInit {
  stateCtrl = new FormControl();
  
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Atta & other Flours',
      itemtype: 'category',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Detergent Powder in Laundary Detergents',
      itemtype: 'category',
      id: 2,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Arhar Dal in Pulses',
      itemtype: 'category',
      id: 3,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Almonds in Dry Fruits & Dry Nuts',
      itemtype: 'category',
      id: 4,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Toilet Cleaner (Acid) in Cleaner',
      itemtype: 'category',
      id: 5,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Maida (Aata) in Atta & Other Flours',
      itemtype: 'category',
      id: 6,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Ashirvaad Sudh Chakki Whole wheat Atta',
      itemtype: 'product',
      id: 7,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Amul butter',
      itemtype: 'product',
      id: 8,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Nirma in washing utensil',
      itemtype: 'product',
      id: 9,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Insecticide In pesticide',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Natraj Toilet Papers',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'MDH Masala in Cooking items',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Kaju Barfi',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Sunsilk Bathing gel',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Almonds in Dry Fruits & Dry Nuts',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Silk Condom',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Colgate in Tooth Paste',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Too Yum Chips',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Aalu Bujia Namkeen in Haldiram',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Milky white',
      itemtype: 'product',
      id: 1,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
  constructor() { 
    this.filteredStates = this.stateCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.states.slice())
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  ngOnInit() {
  }

}
