import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreNosotrosComponent {
  constructor(
    protected darkModeService: DarkModeService,
  ) {}

  getColorClass() {
    return this.darkModeService.getDarkMode() ? 'color-dark' : 'color-light';
  }
}
