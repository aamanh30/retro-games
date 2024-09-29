import { Component, inject, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnDestroy {
  firstNumber: number | undefined;
  secondNumber: number | undefined;
  selectedOperation: string | undefined;
  correctAnswer: number | undefined;
  selectedAnswer: number | undefined;
  timer: number | undefined;
  history: Record<string, number | boolean>[] = [];
  #snackBar = inject(MatSnackBar);
  readonly operations = ['+', '-', '*', '/'];

  constructor() {
    this.onCalculate();
  }

  ngOnDestroy(): void {
    if (!this.history.length) {
      return;
    }
    const correctAnswers = this.history.filter(({ isCorrect }) => isCorrect);
    const time = correctAnswers.reduce(
      (totalTime, { duration }) => totalTime + Number(duration),
      0
    );
    const message = `You answered ${correctAnswers.length} / ${
      this.history.length
    } in ${(time / this.history.length).toFixed(2)}secs(avg)`;
    this.#snackBar.open(message, 'Close', {
      verticalPosition: 'top',
    });
  }

  onCalculate(): void {
    this.timer = Date.now();
    this.selectedAnswer = undefined;
    const firstNumber = Math.ceil(Math.random() * 100 + 1);
    const secondNumber = Math.ceil(Math.random() * 100 + 1);
    const index = Math.floor(Math.random() * 3);
    this.selectedOperation = this.operations[index];
    this.firstNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
    this.secondNumber =
      this.firstNumber === firstNumber ? secondNumber : firstNumber;
    this.correctAnswer = this.#findAnswer(
      index,
      this.firstNumber,
      this.secondNumber
    );
  }

  onCheck(inputElement: HTMLInputElement): void {
    const isCorrect = Number(inputElement.value) === this.correctAnswer;
    this.timer = Math.floor((Date.now() - Number(this.timer)) / 1000);
    this.history.push({
      isCorrect,
      duration: this.timer,
    });
    const message = isCorrect
      ? `Congrats! That's correct. You answered in ${this.timer}secs`
      : `Alas! That's Incorrect. Correct answer is ${this.correctAnswer}`;
    this.#snackBar.open(message, 'Close', {
      panelClass: isCorrect
        ? ['text-bg-success', 'p3']
        : ['text-bg-danger', 'p3'],
      verticalPosition: 'top',
    });
    this.onCalculate();
  }

  #findAnswer(index: number, first: number, second: number) {
    switch (index) {
      case 0:
        return first + second;
      case 1:
        return first - second;
      case 2:
        return first * second;
      case 3:
        return first / second;
      default:
        throw new Error('Invalid operation');
    }
  }
}
