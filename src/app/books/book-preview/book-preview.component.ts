import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../models/book.interface';

@Component({
  selector: 'app-book-preview',
  standalone: true,
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  @Input({ required: true }) book!: IBook;
  @Output() bookselected = new EventEmitter<IBook>();

  selectBook() {
    this.bookselected.emit(this.book);
  }
}
