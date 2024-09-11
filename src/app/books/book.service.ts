import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  http = inject(HttpClient);

  url = 'http://localhost:4730/books';

  getAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
