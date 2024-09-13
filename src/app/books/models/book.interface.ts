import { FormControl } from '@angular/forms';

export interface IBook {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: string;
  price: string;
  cover: string;
}

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};
