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
    ],
  },
];

export default bookRoutes;
