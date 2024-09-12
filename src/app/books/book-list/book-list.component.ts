import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books: any[] = [];
  gebAllBooksSub = inject(BookService)
    .getAll()
    .subscribe((data) => (this.books = data));
}
