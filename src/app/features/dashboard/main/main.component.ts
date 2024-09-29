import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  readonly cards$: Observable<Card[]> = of([
    {
      iconLink: 'cards/battleship.png',
      label: 'Battleship',
      routerLink: '/battleship',
    },
    {
      iconLink: 'cards/fast-maths.png',
      label: 'Fast Maths',
      routerLink: '/fast-maths',
    },
    {
      iconLink: 'cards/vanishing-dot.png',
      label: 'Vanishing Dots',
      routerLink: '/vanishing-dots',
    },
  ]);
  readonly #router = inject(Router);

  onClick(routerLink: string): void {
    this.#router.navigate([routerLink]);
  }
}
