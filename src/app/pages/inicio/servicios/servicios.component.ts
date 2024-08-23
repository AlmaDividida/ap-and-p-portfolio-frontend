import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { servicios } from './servicios.list';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    LottieComponent,
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent {
  servicios = servicios;
  options: AnimationOptions;
  selectedService: any;

  constructor() {
    this.options = {
      path: 'https://lottie.host/a770bfa5-9071-4fa1-a6f1-3c864c1b2573/SEpHOP5pYE.json',
    };
    this.selectedService = this.servicios[0];
  }

  selectService(service: any) {
    this.selectedService = service;
  }
}
