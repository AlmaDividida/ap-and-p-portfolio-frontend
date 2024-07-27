import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-miembros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiembrosComponent { }
