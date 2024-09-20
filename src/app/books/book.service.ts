import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  http = inject(HttpClient);

  getAll() {
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }

  getOne(isbn: string) {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn);
  }

  updateOne(book: IBook) {
    return this.http.put<IBook>(
      'http://localhost:4730/books/' + book.isbn,
      book
    );
  }
}
