import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-preview',
  standalone: true,
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  @Input({ required: true }) book?: IBook;
  @Output() bookSelected = new EventEmitter<IBook>();

  go() {
    this.bookSelected.emit(this.book);
  }
}
