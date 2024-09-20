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

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit, OnChanges {
  @Input() isbn: string = '';
  book?: IBook;

  service = inject(BookService);
  route = inject(ActivatedRoute);
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.service.getOne(this.isbn).subscribe((data) => (this.book = data));
  }
}
