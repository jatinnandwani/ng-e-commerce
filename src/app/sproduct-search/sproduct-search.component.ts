import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductItemsListingService } from '../product-items-listing.service';

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

  states: State[] = [];
  constructor(private _ProductItemsListingService : ProductItemsListingService) { 
   
    
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
    this.states = this._ProductItemsListingService.getPrductnItemsList(); 
    console.log(this.states);
  }

}
