import { ButtonComponent } from '../../components/general/button/button.component';
import { CircleComponent } from '../../components/general/circle/circle.component';
import { Component } from '@angular/core';
import { SquareComponent } from '../../components/general/square/square.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [ButtonComponent, CircleComponent, SquareComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss',
})
export class NotfoundComponent {}
