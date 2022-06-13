import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-listbtid',
  templateUrl: './listbtid.component.html',
  styleUrls: ['./listbtid.component.css']
})
export class ListbtidComponent implements OnInit {
productData:any;
id=1;
  constructor(private service:ProductService) {
    this.loadProductById(this.id);
   }

  ngOnInit(): void {
  }
  loadProductById(id:any){
    this.service.loadProduct().subscribe(data=>{
      this.productData=data;

    });

  }

}
