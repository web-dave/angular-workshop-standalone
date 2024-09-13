import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  http = inject(HttpClient);

  url = 'http://localhost:4730/books';

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  getOne(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + '/' + isbn);
  }

  updateOne(isbn: string, book: IBook) {
    return this.http.put<IBook>(this.url + '/' + isbn, book);
  }

  createOne(book: IBook) {
    return this.http.post<IBook>(this.url, book);
  }
}
