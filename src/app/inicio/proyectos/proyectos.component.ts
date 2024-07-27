import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosComponent { }
