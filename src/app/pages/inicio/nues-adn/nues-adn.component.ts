import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';

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
export default class NuesAdnComponent {
  constructor(
    protected darkModeService: DarkModeService,
  ) {}

  getColorClass() {
    return this.darkModeService.getDarkMode() ? 'color-dark' : 'color-light';
  }
}
