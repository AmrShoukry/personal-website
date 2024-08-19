import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ButtonComponent } from '../../components/general/button/button.component';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../components/general/image/image.component';

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

  sliderIndex = 0; // Use a simple number for the index
  intervalId: any = null; // Initialize intervalId
  readonly slideInterval = 5000; // Interval for changing slides

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && this.elements.length > 0) {
      this.startTimer();
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  startTimer() {
    // Clear existing timer if any
    this.clearTimer();

    // Set up an interval to change slides automatically
    this.intervalId = setInterval(() => {
      this.incrementIndex();
    }, this.slideInterval);
  }

  clearTimer() {
    // Clear the interval if it exists
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null; // Reset intervalId
    }
  }

  resetTimer() {
    // Reset and start the timer
    this.clearTimer();
    this.startTimer();
  }

  incrementIndex() {
    // Update slider index to show the next slide
    this.sliderIndex = (this.sliderIndex + 1) % this.elements.length;
  }

  decrementIndex() {
    // Update slider index to show the previous slide
    this.sliderIndex =
      (this.sliderIndex - 1 + this.elements.length) % this.elements.length;
  }

  onUserInteraction() {
    // Handle user interaction and reset the timer
    this.resetTimer();
  }
}
