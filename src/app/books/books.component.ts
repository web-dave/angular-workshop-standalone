import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {}
