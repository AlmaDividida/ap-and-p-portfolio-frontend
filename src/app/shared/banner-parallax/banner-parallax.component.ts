import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner-parallax',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './banner-parallax.component.html',
  styleUrl: './banner-parallax.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerParallaxComponent { }
