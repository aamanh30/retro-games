import { Component, Input } from '@angular/core';
import { ToastType } from '../models/toast-type';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  @Input() toastType: ToastType = ToastType.medium;

  readonly ToastType = ToastType;
}
