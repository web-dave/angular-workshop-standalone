import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
  standalone: true,
})
export class PagesPipe implements PipeTransform {
  transform(value: number = 0, text: string = ''): string {
    return `${value} ${text}`;
  }
}
