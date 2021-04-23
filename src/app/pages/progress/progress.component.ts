import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progress1: number = 25;
  progress2: number = 35;

  get getProgreso1(){
    return `${ this.progress1 }%`;
  }

  get getProgreso2(){
    return `${ this.progress2 }%`;
  }

  aumentar( value: number ){
    this.progress1 = value;
  }
  aumentar2( value: number ){
    this.progress2 = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
