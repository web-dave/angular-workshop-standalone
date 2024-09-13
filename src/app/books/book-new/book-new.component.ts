import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IBook, IForm } from '../models/book.interface';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  formBuilder = inject(NonNullableFormBuilder);

  service = inject(BookService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  newBookForm: FormGroup<IForm<IBook>> = this.formBuilder.group({
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

  // f = this.newBookForm.valueChanges.subscribe((data) => console.log(data));
  w = this.newBookForm.events.subscribe((data) => console.log(data));

  formKeys = Object.keys(this.newBookForm.controls);

  save() {
    this.service
      .createOne(this.newBookForm.getRawValue())
      .subscribe((data) =>
        this.router.navigate(['..', data.isbn], { relativeTo: this.route })
      );
  }
}
