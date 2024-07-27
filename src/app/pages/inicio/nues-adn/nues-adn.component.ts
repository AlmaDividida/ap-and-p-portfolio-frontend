import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nues-adn',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nues-adn.component.html',
  styleUrl: './nues-adn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuesAdnComponent { }
