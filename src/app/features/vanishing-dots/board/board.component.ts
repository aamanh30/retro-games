import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  matrix: any[] = [];
  interval: NodeJS.Timeout | undefined;
  matrixSize: number | undefined;
  selected: number[] = [];
  numberOfCircles: number = 6;
  chosen: number[] = [];
  gameStarted = false;
  gameSeconds = 5;
  gameEnded = false;

  constructor() {}

  ngOnInit() {
    this.initGame();
  }

  initGame(circles?: number, size?: number) {
    this.gameStarted = false;
    this.gameSeconds = 5;
    this.gameEnded = false;
    this.numberOfCircles = circles ?? 6;
    this.matrixSize = size ?? 6;
    this.selectIndices();
  }

  initMatrix() {
    this.matrix = [];
    for (let i = 0; i < Math.pow(Number(this.matrixSize), 2); i++) {
      this.matrix.push({
        index: i,
        active: this.selected.indexOf(i) < 0 ? false : true,
        show: true,
      });
    }

    setTimeout(() => {
      this.matrix.map((item) => (item.show = false));
      this.gameStarted = true;
      clearInterval(this.interval);
    }, 5000);

    this.interval = setInterval(() => {
      this.gameSeconds -= 1;
    }, 1000);
  }

  selectIndices() {
    this.selected = [];
    this.chosen = [];
    while (this.selected.length !== this.numberOfCircles) {
      let index = Math.ceil(
        Math.random() * (Math.pow(Number(this.matrixSize), 2) - 1)
      );
      if (this.selected.indexOf(index) < 0) {
        this.selected.push(index);
      }
    }
    this.initMatrix();
  }

  checkActive(idx: number) {
    let { active: status } = this.matrix[idx] ?? {};
    if (!status) {
      alert('You lost');
      this.gameEnded = true;
      this.matrix.map((item) => (item.show = true));
      setTimeout(() => {
        this.initGame(this.numberOfCircles);
      }, 2000);
      return;
    }
    if (this.chosen.indexOf(idx) >= 0) {
      return;
    }
    this.chosen.push(idx);
    this.matrix[idx].show = true;
    if (this.chosen.length === this.selected.length) {
      setTimeout(() => {
        alert('You won');
        this.numberOfCircles += 1;
        this.initGame(this.numberOfCircles);
      }, 500);
    }
  }
}
