import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
message='Welcome checking'
messageclass=''
register: any;
  constructor(private service:ProductService) { }
//  constructor(private service:ProductService) {this.loadProduct(); }
// productData:any;

  ngOnInit() {
  
    this.register=new FormGroup({
  id:new FormControl({value:'P001',disabled:true}),
  name:new FormControl("Lakme",Validators.required),
  quantity:new FormControl(),
  price:new FormControl(),
});
  }
/*saveProduct(){
  if(this.register.valid){
  
this.service.saveProduct(this.register.value).subscribe(result=>{
  if(result!=null){
    this.message="Product SavedSuccessfully"
this.messageclass="success"
  }
});
}
else{
this.message="please enter valid data"
this.messageclass="error"
}
}*/
/*loadProduct(){
  this.service.loadProduct().subscribe(data=>{
    this.productData=data;

  });
}*/
view(a:any){
  window.alert(a.name);
}

}
