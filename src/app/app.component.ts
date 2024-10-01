import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'expense-tracker';
  greeting: string = 'Hello World!';
  isDisabled: boolean = true;

  username: string = '';

  dynamicCss = {
    color: 'red',
    fontSize: '2rem',
  };

  onClick() {
    alert(this.username);
  }
}
