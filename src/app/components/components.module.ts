import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreasingComponent } from './increasing/increasing.component';
import { FormsModule } from '@angular/forms';
import { DonnutComponent } from './donnut/donnut.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncreasingComponent,
    DonnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    IncreasingComponent,
    DonnutComponent,
  ]
})
export class ComponentsModule { }
