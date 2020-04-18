import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
//import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path : '', redirectTo: '', pathMatch : 'full'},
  { path : 'product', component : BuyProductComponent },
  { path : "**", component : PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
