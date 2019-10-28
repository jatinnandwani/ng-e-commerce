import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

//For My Product Search box

export interface StateGroup {
  letter: string[];
  names: string[];
}

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
  //For My search box 
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{

    letter: ['Atta in Atta & Other Flours','Detergent Powder In Laundary Detergents','Sugar In Salt & sugar','Biscuits In Biscuit & Cookies','Soap In Bath And Body','Butter In Butter And Cheese', 'Besan In Atta & Others Flours','Tea In Tea & Coffee'],
    names: ['Amul butter', 'Amul Cheese', 'Natural Apple', 'Breads','Mother Dairy Milk','Basmati Rice','Tata Tea','Johnsan Baby Soad','Sunsilk Shampoo','Tide','Milky Biscuit'],
  }
];

  stateGroupOptions: Observable<StateGroup[]>;
  //End of my Search box
 
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

category = new FormControl();
catrgoryoptions: string[] = ['Atta','Sugar','Rice','Daal','Milk','Cegrette','Toilet Paper','Almonds','Maida','Butter','Biscuit','Namkeen','Tea'];
filteredCategories : Observable<string[]>;

trendingCategory = new FormControl();
trendingCategoryOption : string [] = ['Biscuit','Namkeen','Diwali Packs','Chocolate','SoftDrinks','Water Bottle','Atta'];

CategoryProducts = new FormControl();
categoryProductsOption : string[] = ['Basmati Rice','Almonds New', 'Amul Milk', 'Butter Milk','Aqua'];
categoryProductsOptions : Observable<string[]>;

public  createFilterFor(query) {
  var lowercaseQuery = query.toLowerCase();

  return function filterFn(state) {
    return (state.value.indexOf(lowercaseQuery) === 0);
  };

}

  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.filteredOptions = this.cities.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  }
  // For my product search box
  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
  // for my product Seach box 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _productfilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.categoryProductsOption.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  open_cart(){
    this.show = !this.show;
  }

  selectionChanged(){

  }

}

