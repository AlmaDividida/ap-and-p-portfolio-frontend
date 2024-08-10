
import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../services/dark-mode.service';
@Component({
  selector: 'app-inicio-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-banner.component.html',
  styleUrls: ['./inicio-banner.component.css']
})
export class InicioBannerComponent {


  constructor(
    protected darkModeService: DarkModeService
  ) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  getColorClass() {
    return this.darkModeService.getDarkMode() ? 'color-dark' : 'color-light';
  }

  test() {
    console.log("Funciona el boton :D")
  }
}