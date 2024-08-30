import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MiembrosService } from '../../../services/miembros.service';
import { MiembrosMenuComponent } from "./miembros-menu/miembros-menu.component";
import { miembros } from './miembros.list';
import { LottieLazyComponent } from "../../../shared/LottieLazyComponent/LottieLazyComponent.component";
import { timer } from 'rxjs';

interface Miembro {
  id: number;
  nombre: string;
  apodo: string;
  puesto: string;
  descripcion: string;
  imagen: string;
  video: string;
}

@Component({
  selector: 'app-miembros',
  standalone: true,
  imports: [CommonModule, MiembrosMenuComponent, LottieLazyComponent],
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MiembrosComponent {
  miembros: Miembro[];
  miembroSeleccionado: Miembro;

  constructor() {
    this.miembros = miembros;
    this.miembroSeleccionado = this.miembros[0];
  }

  getMiembroSeleccionado(miembro: Miembro) {
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    this.miembroSeleccionado = miembro;
    timer(200).subscribe(() => {
      videoElement.load();
    });
  }
}