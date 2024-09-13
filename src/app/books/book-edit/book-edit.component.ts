import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../models/book.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss',
})
export class BookEditComponent {
  book?: IBook;

  route = inject(ActivatedRoute);
  service = inject(BookService);
  router = inject(Router);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const isbn: string = params['isbn'];
      this.service.getOne(isbn).subscribe((data) => (this.book = data));
    });
  }

  save(form: NgForm) {
    console.log(form);
    const book = this.book as IBook;

    this.service
      .updateOne(book.isbn, book)
      .subscribe((data) =>
        this.router.navigate(['..'], { relativeTo: this.route })
      );
  }
}
