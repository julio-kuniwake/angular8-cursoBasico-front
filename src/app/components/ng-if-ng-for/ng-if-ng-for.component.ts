import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.css']
})
export class NgIfNgForComponent implements OnInit {

  listNumeros = [1, 2, 3, 4, 5];
  listNomes = ["julio", "Ana", "Carol"];

  constructor() { }

  ngOnInit() {
  }

  showNames(){
    this.listNomes;
  }

}
