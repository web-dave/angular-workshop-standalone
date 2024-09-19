import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookPreviewComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  service = inject(BookService);
  books: IBook[] = [];
  ngOnInit(): void {
    this.service.getAll().subscribe((data) => (this.books = data));
  }

  goTo(e: any) {
    console.table(e);
  }
}
