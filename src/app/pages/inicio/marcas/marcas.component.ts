import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { marcas } from './marcas.list';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarcasComponent {
  marcas = marcas;
}
