import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
export interface Pokemon {
  value: string;
  viewValue: string;
}

export interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
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
        
  
myControl = new FormControl();
options: string[] = ['Delhi', 'Mumbai', 'Banglore','Punjab','Himachal Pradesh','Hyderabad','chennai','Pune'];
filteredOptions : Observable<string[]>;

pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'}
      ]
    },
    {
      name: 'Water',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Squirtle'},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'}
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        {value: 'charmander-6', viewValue: 'Charmander'},
        {value: 'vulpix-7', viewValue: 'Vulpix'},
        {value: 'flareon-8', viewValue: 'Flareon'}
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        {value: 'mew-9', viewValue: 'Mew'},
        {value: 'mewtwo-10', viewValue: 'Mewtwo'},
      ]
    }
  ];
  
public  createFilterFor(query) {
  var lowercaseQuery = query.toLowerCase();

  return function filterFn(state) {
    return (state.value.indexOf(lowercaseQuery) === 0);
  };

}

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

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

