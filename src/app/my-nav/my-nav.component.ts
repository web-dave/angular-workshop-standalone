import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-nav.component.html',
  styleUrl: './my-nav.component.scss',
})
export class MyNavComponent {}
