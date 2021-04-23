import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styleUrls: ['./increasing.component.css']
})
export class IncreasingComponent implements OnInit {

  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('value') outputValue: EventEmitter<number> = new EventEmitter();

  changeValue( value: number ){

    if( this.progress >= 100 && value >= 0 ){
      this.outputValue.emit(100);
      this.progress = 100;
    }

    if( this.progress <= 0 && value < 0 ){
      this.outputValue.emit(0);
      this.progress = 0;
    }

    this.progress = this.progress + value;
    this.outputValue.emit( this.progress );

  }

  onChange( newValue :number ){
    if( newValue >= 100 ){
      this.progress = 100;
    }
    if( newValue <= 0 ){
      this.progress = 0;
    }

    this.outputValue.emit( newValue);
  }

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

}
