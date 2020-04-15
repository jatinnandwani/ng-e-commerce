import { Component, OnInit, ElementRef, DoCheck  } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DeliverableCitiesService } from '../deliverable-cities.service';


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
  // cities = new FormControl();
  // citiesoptions: string[] = ['Delhi', 'Mumbai', 'Banglore','Punjab','Himachal Pradesh','Hyderabad','chennai','Pune','Himachal Pradesh','Hyderabad','Talangana'];
  // filteredOptions : Observable<string[]>;


  // Modifying 15-04-2020
  cityAvailablefilteredOptions : Observable<cityInterface[]>;
  newcities = new FormControl();
  availableCities : cityInterface[] = [
          { cityName : "Delhi" ,
            id : "Delhi"
          },
          { cityName : "Mumbai" ,
            id : "Mumbai"
          },
          { cityName : "Banglore",
            id : "Banglore"
          },
          { cityName : "Punjab",
            id : "Punjab" }
          ,
          { cityName : "Hyderabad",
            id : "Hyderabad"
          },
          { cityName : "Talangana",
            id : "Talangana"
          }
  ]

  
  // Modifying 15-04-2020
  
  constructor(private _deliverableCitiesService : DeliverableCitiesService) { }

  ngOnInit() {
   this.topsearchdcities = this._deliverableCitiesService.topSearchedCities();
   //newly adding 15-04-2020
   this.cityAvailablefilteredOptions = this.newcities.valueChanges
    .pipe(
    startWith(''),
    map(cityInterface => this._newfilter(cityInterface))
  );
     
  //newly adding 15-04-2020
  }
  // newly adding
  private _newfilter(value: string ): cityInterface[] {
    const filterValue = value.toLowerCase();
    return this.availableCities.filter(option => option.cityName.toLowerCase().indexOf(filterValue) === 0);
  }
  // newly adding
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.citiesoptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }

  open_cart(){
    this.show = !this.show;
  }

  selectionChanged(){
  }
}