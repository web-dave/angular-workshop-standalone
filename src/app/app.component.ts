import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-workshop-standalone';
}
