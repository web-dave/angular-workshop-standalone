import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { IBook } from '../book.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookPreviewComponent, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  service = inject(BookService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.service.getAll().subscribe((data) => (this.books = data));
  }

  goTo(e: IBook) {
    this.router.navigate([e.isbn], {
      relativeTo: this.route,
    });
  }
}
