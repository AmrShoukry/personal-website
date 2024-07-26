import { Router, RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { LinksComponent } from './components/navbar/links/links.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-website';

  constructor(private router: Router) {}

  // ngOnInit() {
  //   // Get the current URL
  //   const initialUrl = window.location.pathname;

  //   console.log(initialUrl);

  //   // Navigate to the route based on the initial URL
  //   this.router.navigate([initialUrl]);
  // }
}
