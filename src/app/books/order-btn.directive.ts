import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[orderBtn]',
  standalone: true,
})
export class OrderBtnDirective implements OnInit, OnChanges {
  @Input() orderBtn? = '';
  @Output() buyMe = new EventEmitter<string>();

  orderButton = document.createElement('button');

  hostElem: ElementRef<HTMLElement> = inject(ElementRef);

  ngOnInit(): void {
    this.hostElem.nativeElement.appendChild(this.orderButton);

    fromEvent(this.orderButton, 'click').subscribe((data) => {
      console.log(data);
      this.buyMe.emit('Ich kaufe das Buch ' + this.orderBtn);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.orderButton.innerText = this.orderBtn || '';
  }
}
