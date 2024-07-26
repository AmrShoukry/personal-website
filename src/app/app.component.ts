import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { LinksComponent } from './components/navbar/links/links.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-website';

  constructor() {}
}
