import { NgModule } from '@angular/core';

import { ListbtidComponent } from './listbtid/listbtid.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ProductComponent } from './product/product.component';
import { AddnewComponent } from './addnew/addnew.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {
path:"product", component:ProductComponent,
children:[{
  path:"", component:ListingComponent
},
{
  path:"create",component:AddnewComponent
},
{
  path:"view",component:ListbtidComponent
},
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
