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
      path: "https://lottie.host/c3d71456-c9f2-476f-a92d-5c6ed13746fe/uxFkbReAJ9.json",
    };
  }
}
