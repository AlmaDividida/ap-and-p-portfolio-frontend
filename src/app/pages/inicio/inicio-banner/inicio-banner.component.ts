
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../services/dark-mode.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/header/header.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { LottieLazyComponent } from '../../../shared/LottieLazyComponent/LottieLazyComponent.component';

@Component({
  selector: 'app-inicio-banner',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule,
    LottieLazyComponent,
    LottieComponent
],
  templateUrl: './inicio-banner.component.html',
  styleUrls: ['./inicio-banner.component.css']
})
export class InicioBannerComponent {
  options: AnimationOptions;

  constructor(
    protected darkModeService: DarkModeService
  ) {
    this.options = {
      path: 'lotties/banner.json',
      loop: false
    };
  }

}