import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss',
})
export class BookEditComponent {
  @Input() isbn: string = '';
  book?: IBook;
  service = inject(BookService);

  ngOnChanges(changes: SimpleChanges): void {
    this.service.getOne(this.isbn).subscribe((data) => (this.book = data));
  }

  saveBook() {
    this.service.updateOne(this.book as IBook).subscribe();
  }
}
