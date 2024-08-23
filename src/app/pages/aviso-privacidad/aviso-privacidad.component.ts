import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CardComponent } from "./card/card.component";
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-aviso-privacidad',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CardComponent
],
  templateUrl: './aviso-privacidad.component.html',
  styleUrl: './aviso-privacidad.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvisoPrivacidadComponent { 
  constructor(
    protected darkModeService: DarkModeService
  ) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
