import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';

import { ButtonComponent } from '../../components/general/button/button.component';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../components/general/image/image.component';
import { interval } from 'rxjs';

interface SectionElement {
  title: string;
  text?: string;
  image?: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ImageComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() type: string = 'secondary';
  @Input() variant: string = 'one';
  @Input() head: string = '';
  @Input() elements: SectionElement[] = [];
  @Input() href: string = '/';
  @Input() link: boolean = true;
  @Input() local: boolean = false;

  sliderIndex = signal<number>(0);
  intervalId: any = null; // Initialize intervalId

  // constructor() {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //     this.intervalId = null;
  //   }
  //   this.intervalId = setInterval(() => {
  //     console.log('555');
  //   }, 10000); // Change index every 10 seconds
  // }

  ngOnInit() {
    // const obj = interval(1000);
    // obj.subscribe((d) => {
    //   console.log(d);
    // });
    // if (this.intervalId) {
    //   clearInterval(this.intervalId);
    //   this.intervalId = null;
    // }
    // this.intervalId = setInterval(() => {
    //   console.log('555');
    // }, 10000); // Change index every 10 seconds
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  startTimer() {}

  clearTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null; // Reset intervalId
    }
  }

  // Only reset the timer on user interaction, not on automatic index change
  resetTimer() {
    this.clearTimer();
    this.startTimer();
  }

  incrementIndex() {
    this.sliderIndex.update(
      (oldValue) => (oldValue + 1) % this.elements.length
    );
  }

  decrementIndex() {
    this.sliderIndex.update(
      (oldValue) => (oldValue - 1 + this.elements.length) % this.elements.length
    );
  }

  // Method to be called when user interacts with navigation
  onUserInteraction() {
    this.resetTimer();
  }
}
