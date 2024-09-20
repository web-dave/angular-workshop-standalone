import { AboutComponent } from '../about/about.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';

const bookRoutes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: ':isbn',
        component: BookDetailsComponent,
      },
    ],
  },
];

export default bookRoutes;
