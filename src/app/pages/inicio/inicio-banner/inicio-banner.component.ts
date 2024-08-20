
import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../services/dark-mode.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/header/header.component';
@Component({
  selector: 'app-inicio-banner',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
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

  getDarkMode() {
    return this.darkModeService.getDarkMode();
  }

  test() {
    console.log("Funciona el boton :D")
  }
}