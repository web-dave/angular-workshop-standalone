import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  service = inject(BookService);
  newBookForm: FormGroup<IForm<IBook>> = inject(NonNullableFormBuilder).group({
    title: ['', [Validators.required]],
    subtitle: [''],
    isbn: ['', [Validators.required]],
    abstract: [''],
    numPages: [0],
    author: [''],
    publisher: [''],
    price: [''],
    cover: [''],
  });

  saveBook() {
    this.service.createOne(this.newBookForm.getRawValue()).subscribe();
  }
}
