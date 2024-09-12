import { Component, inject, OnInit } from '@angular/core';
import { IBook } from '../models/book.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../book.service';
import { PagesPipe } from '../pages.pipe';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, PagesPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  book?: IBook;

  route = inject(ActivatedRoute);
  service = inject(BookService);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const isbn: string = params['isbn'];
      this.service.getOne(isbn).subscribe((data) => (this.book = data));
    });
  }
}
