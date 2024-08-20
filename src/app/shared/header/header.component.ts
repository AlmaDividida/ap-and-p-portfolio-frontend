import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  dropdownActive: boolean;
  constructor(
    protected darkModeService: DarkModeService
  ) {
    this.dropdownActive = false;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  getDarkMode() {
    return this.darkModeService.getDarkMode();
  }

  getBgColor() {
    return this.getDarkMode() ? 'bg-dark ' : 'bg-light ';
  }
  
  toggleMenu() {
    this.dropdownActive = !this.dropdownActive;
  }

  
}
