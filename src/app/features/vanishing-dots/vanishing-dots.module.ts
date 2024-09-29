import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VanishingDotsRoutingModule } from './vanishing-dots-routing.module';
import { BoardComponent } from './board/board.component';
import { BoxComponent } from './box/box.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [BoardComponent, BoxComponent, CircleComponent],
  imports: [CommonModule, VanishingDotsRoutingModule],
})
export class VanishingDotsModule {}
