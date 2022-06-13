import { Component, OnInit } from '@angular/core';
import { Router,ROUTES } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  constructor(private service:ProductService,private router:Router) 
  {
    this.loadProduct(); 
    
  }
productData:any;
  ngOnInit(): void {
  }
  loadProduct(){
    this.service.loadProduct().subscribe(data=>{
      this.productData=data;

    });
  }
  view(){
window.alert("lets view the product details");
    //this.router.navigateByUrl('/view');
  }

}
