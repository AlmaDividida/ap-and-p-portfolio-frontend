
import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inicio-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-banner.component.html',
  styleUrls: ['./inicio-banner.component.css']
})
export class InicioBannerComponent {

  @HostBinding('class.dark-mode') darkMode = false;

  isDarkMode: boolean = false;

  toggleDarkMode() {
   

    this.isDarkMode = !this.isDarkMode;
    this.darkMode = this.isDarkMode;

  }
}