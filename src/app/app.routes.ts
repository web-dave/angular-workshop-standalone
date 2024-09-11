import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
];
