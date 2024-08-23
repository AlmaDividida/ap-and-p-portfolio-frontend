import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NosotrosComponent {
  constructor(
    protected darkModeService: DarkModeService
  ) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

}
