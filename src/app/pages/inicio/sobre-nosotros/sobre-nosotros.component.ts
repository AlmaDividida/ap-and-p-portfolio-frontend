import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { RouterModule } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import path from 'path';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LottieComponent,
  ],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreNosotrosComponent {
  options: AnimationOptions;
  constructor(
    protected darkModeService: DarkModeService,
  ) {
    this.options = {
      path: 'https://lottie.host/2fdd211e-8e4a-40a7-b260-87353994798b/EgwU6kNLCc.json',
    };
  }

  getDarkMode() {
    return this.darkModeService.getDarkMode();
  }
}
