import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'pages',
  standalone: true,
})
export class PagesPipe implements PipeTransform {
  transform(value: IBook, text: string = 'S.:'): string {
    return `${text} ${value.numPages}`;
  }
}
