import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-my-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './my-nav.component.html',
  styleUrl: './my-nav.component.scss',
})
export class MyNavComponent {}
