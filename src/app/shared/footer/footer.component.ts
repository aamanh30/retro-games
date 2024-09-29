import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  githubLink = 'https://github.com/aamanh30';
  year = new Date().getFullYear();
}
