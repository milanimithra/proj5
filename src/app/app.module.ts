import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ListingComponent } from './listing/listing.component';
import { AddnewComponent } from './addnew/addnew.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { PdPipe } from './pd.pipe';
import { ListbtidComponent } from './listbtid/listbtid.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ChkComponent } from './chk/chk.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ListingComponent,
    AddnewComponent,
    PipedemoComponent,
    PdPipe,
    ListbtidComponent,
    ChkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
