import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookPreviewComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  selectedBook: any;
  books: any[] = [];
  gebAllBooksSub = inject(BookService)
    .getAll()
    .subscribe((data) => (this.books = data));

  bookisSelected(e: any) {
    console.log(e);
    this.selectedBook = e;
  }
}
