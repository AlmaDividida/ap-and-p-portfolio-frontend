import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-lazy-component',
  standalone: true,
  imports: [
    CommonModule,
    LottieComponent,
  ],
  templateUrl: './LottieLazyComponent.component.html',
  styleUrl: './LottieLazyComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LottieLazyComponent implements OnInit {
  @ViewChild('lottieContainer') lottieContainer!: ElementRef;
  @Input()
  isInView = false;

  @Input()
  options: AnimationOptions = {};

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (this.lottieContainer) {
      const rect = this.lottieContainer.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        this.isInView = true;
      } else {
        this.isInView = false;
      }
    }
  }
}