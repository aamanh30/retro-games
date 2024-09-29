import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleshipRoutingModule } from './battleship-routing.module';
import { BoardComponent } from './board/board.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, BattleshipRoutingModule, MatCardModule],
})
export class BattleshipModule {}
