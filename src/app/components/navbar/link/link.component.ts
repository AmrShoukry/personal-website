import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { filter } from 'rxjs';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() link: string = '';
  isActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkActiveLink();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkActiveLink();
      });
  }

  private checkActiveLink() {
    const currentUrl = this.router.url.split('#')[0]; // Ignore fragments in URL comparison
    const targetUrl = this.link.split('#')[0];
    this.isActive = currentUrl === targetUrl;
  }
}
