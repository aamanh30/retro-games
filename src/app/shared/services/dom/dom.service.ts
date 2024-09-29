import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomService {
  #element: HTMLElement;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.#element = this.document.documentElement;
  }

  openFullscreen() {
    this.#element.requestFullscreen?.();
  }

  closeFullscreen() {
    this.document.exitFullscreen();
  }
}
