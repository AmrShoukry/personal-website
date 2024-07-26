import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss',
})
export class SvgComponent implements OnInit {
  @Input() svgContent: string = '';
  sanitizedSvg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(this.svgContent);
  }
}
