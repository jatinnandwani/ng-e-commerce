import { Component, OnInit, ElementRef, DoCheck  } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DeliverableCitiesService } from '../deliverable-cities.service';
import { DeliveringCitiesService } from '../delivering-cities.service';


interface cityInterface{
  cityName : string,
  id : string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  public isCollapsed      = false;
  public show:boolean     = false;
  public buttonName:any   = 'Show';
  public toogle_cart      = 'hide_cart';
  public header_heading   = 'Flat Rs.100 Cashback | Code: HAPPY100 | Min Order: Rs.1500';
  public location         = 'Location';
  public selectedValue = null;               
  public topsearchdcities = [];
  public checkCollapse(check){
    if(check.classList.contains('show')){
      console.log('is open');
      
    }
  }
  
  cityAvailablefilteredOptions : Observable<cityInterface[]>;
  newcities = new FormControl();
  availableCities : cityInterface[] = []
  
  constructor(private _deliverableCitiesService : DeliverableCitiesService, private _deliveringCitie : DeliveringCitiesService) { }

  ngOnInit() {
   this.topsearchdcities = this._deliverableCitiesService.topSearchedCities();
   // Get cities for the droopdown  
   this.availableCities = this._deliveringCitie.getDeliveringCities(); 
   
   this.cityAvailablefilteredOptions = this.newcities.valueChanges
    .pipe(
    startWith(''),
    map(cityInterface => this._newfilter(cityInterface))
  );
  }
  private _newfilter(value: string ): cityInterface[] {
    const filterValue = value.toLowerCase();
    return this.availableCities.filter(option => option.cityName.toLowerCase().indexOf(filterValue) === 0);
  }
 
  open_cart(){
    this.show = !this.show;
  }

  selectionChanged(){
  }
}