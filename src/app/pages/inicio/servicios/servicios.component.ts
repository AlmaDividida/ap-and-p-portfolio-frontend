import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { servicios } from './servicios.list';
import { ServiciosCardsComponent } from "./servicios-cards/servicios-cards.component";
import { Servicio } from '../../../models/Servicio';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    ServiciosCardsComponent
],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent {
  servicios: Servicio[] = servicios;
  selectedService: Servicio;

  constructor() {
    this.selectedService = this.servicios[0];
  }

  selectService(service: any) {
    this.selectedService = service;
  }
}
