import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

tdydate=new Date().toDateString();


p1="P001-IPhone"
p2="P002-Samsung"
p3="P003-Redmi"


  constructor() { }

  ngOnInit(): void {
  
  }

}
