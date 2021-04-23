import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  public labels: Label[] = ['Bread', 'Chocolate', 'Coffee'];
  public data1: MultiDataSet = [
    [40, 20, 10]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
