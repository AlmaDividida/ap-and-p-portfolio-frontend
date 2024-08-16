import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    protected darkModeService: DarkModeService
  ) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  getColorClass() {
    return this.darkModeService.getDarkMode() ? 'color-dark' : 'color-light';
  }
}
