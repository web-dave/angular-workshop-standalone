import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  book?: IBook;

  service = inject(BookService);
  route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.service
      .getOne(this.route.snapshot.params['isbn'])
      .subscribe((data) => (this.book = data));
  }
}
