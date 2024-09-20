import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IBook } from '../book.interface';
import { JsonPipe } from '@angular/common';
import { PagesPipe } from '../pages.pipe';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, JsonPipe, PagesPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnChanges {
  @Input() isbn: string = '';
  book?: IBook;
  service = inject(BookService);

  ngOnChanges(changes: SimpleChanges): void {
    this.service.getOne(this.isbn).subscribe((data) => (this.book = data));
  }
}
