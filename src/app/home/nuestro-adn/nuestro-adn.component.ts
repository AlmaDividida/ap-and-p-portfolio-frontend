import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nuestro-adn',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nuestro-adn.component.html',
  styleUrl: './nuestro-adn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuestroAdnComponent { }
