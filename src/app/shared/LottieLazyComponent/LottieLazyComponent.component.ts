import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

export class LottieLazyComponent implements AfterViewInit {
  @ViewChild('lottieContainer', { static: false }) lottieContainer!: ElementRef;
  @Input()
  isInView = false;

  @Input()
  options: AnimationOptions = {};

  ngAfterViewInit() {
    // Verificación de existencia de lottieContainer y de IntersectionObserver
    if (this.lottieContainer && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          this.isInView = true;
          observer.disconnect();
        }
      });

      observer.observe(this.lottieContainer.nativeElement);
    } else {
      // Opcional: Manejo en caso de que IntersectionObserver no esté disponible
      console.warn('IntersectionObserver is not supported or lottieContainer is undefined');
    }
  }
}