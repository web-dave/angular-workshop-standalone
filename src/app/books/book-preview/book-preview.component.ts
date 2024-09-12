import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  standalone: true,
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  @Input() book: any;
  @Output() bookselected = new EventEmitter();

  selectBook() {
    this.bookselected.emit(this.book);
  }
}
