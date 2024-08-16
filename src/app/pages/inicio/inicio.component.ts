import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SobreNosotrosComponent } from "./sobre-nosotros/sobre-nosotros.component";
import { NuesAdnComponent } from "./nues-adn/nues-adn.component";
import { InicioBannerComponent } from './inicio-banner/inicio-banner.component';
import { FooterComponent } from "./footer/footer.component";
import { ContactoComponent } from './contacto/contacto.component';
import { DarkModeService } from '../../services/dark-mode.service';
import { ProyectosComponent } from "./proyectos/proyectos.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    SobreNosotrosComponent,
    NuesAdnComponent,
    InicioBannerComponent,
    FooterComponent,
    ContactoComponent,
    ProyectosComponent
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InicioComponent {
  constructor(
    protected darkModeService: DarkModeService,
  ) { }
  
}
