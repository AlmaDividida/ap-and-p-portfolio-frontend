import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
  WritableSignal,
} from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  dropdownActive: boolean;
  scrollClass: WritableSignal<String>;
  constructor(protected darkModeService: DarkModeService) {
    this.dropdownActive = false;
    this.scrollClass = signal('top');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    if (pos === max) {
      if (this.scrollClass() !== 'top') {
        this.scrollClass = signal('top');
      }
    } else {
      if (this.scrollClass() !== 'scroll') {
        this.scrollClass = signal('scroll');
      }
    }
  }

  toggleMenu() {
    this.dropdownActive = !this.dropdownActive;
  }
}
