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
  visible: boolean;
  constructor(
    protected darkModeService: DarkModeService
  ) {
    if (typeof window !== "undefined") {
      this.visible = !(window.innerWidth < 768);
   } else {
      this.visible = true;
    }
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  getColorClass() {
    return this.darkModeService.getDarkMode() ? 'color-dark' : 'color-light';
  }

  toggleMenu() {
    this.visible = !this.visible;
  }
}
