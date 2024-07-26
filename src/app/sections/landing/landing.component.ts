import { ButtonComponent } from '../../components/general/button/button.component';
import { CircleComponent } from '../../components/general/circle/circle.component';
import { Component } from '@angular/core';
import { SquareComponent } from '../../components/general/square/square.component';
import { aboutData } from '../../../../data';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CircleComponent, SquareComponent, ButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  aboutData = aboutData;
}
