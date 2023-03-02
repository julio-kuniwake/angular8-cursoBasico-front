import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  numeroInput: number;
  numeroInputMetodo: number;
  numeroChange: number;
  numeroBlur: number;

  constructor() { }

  ngOnInit() {
  }

  obterNumero( numeroInputMetodo: number){
    this.numeroInputMetodo = numeroInputMetodo;
  }

}
