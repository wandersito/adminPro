import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donnut',
  templateUrl: './donnut.component.html',
  styleUrls: ['./donnut.component.css']
})
export class DonnutComponent implements OnInit {

  @Input() title: string = 'Sin titulo';
  @Input() labels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input() data: MultiDataSet = [
    [350, 450, 100]
  ];

  public colors:Color[]= [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
