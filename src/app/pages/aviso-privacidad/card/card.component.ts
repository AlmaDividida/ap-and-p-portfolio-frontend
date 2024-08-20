import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  constructor(
    protected darkModeService: DarkModeService,
  ) {
  }

  getDarkMode(): boolean {
    return this.darkModeService.getDarkMode();
  }
}
