import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
apiurl='http://localhost:9191/ProductController/products';
apiurlsave='http://localhost:9191/ProductController/findProductById/{id}';
  constructor(private http:HttpClient) {
   
   }

  loadProduct(){
   // console.log(this.http.get(this.apiurl));
    return this.http.get(this.apiurl);
  }

/*saveProduct(productData:any){
  return this.http.post(this.apiurlsave, productData);
}*/

loadProductById(id:any)
{
  return this.http.get(this.apiurlsave+'/'+id);
}

// RemoveProduct(id:any)
// {
//   return this.http.delete(this.apiurl+'/'+id);
// }
}


