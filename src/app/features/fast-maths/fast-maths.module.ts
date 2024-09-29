import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FastMathsRoutingModule } from './fast-maths-routing.module';
import { BoardComponent } from './board/board.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    FastMathsRoutingModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
  ],
})
export class FastMathsModule {}
