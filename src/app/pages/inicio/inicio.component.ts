import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { SobreNosotrosComponent } from "./sobre-nosotros/sobre-nosotros.component";
import { InicioBannerComponent } from './inicio-banner/inicio-banner.component';
import { BannerParallaxComponent } from "../../shared/banner-parallax/banner-parallax.component";
import ContactoComponent from './contacto/contacto.component';
import { ServiciosComponent } from "./servicios/servicios.component";
import ProyectosComponent from './proyectos/proyectos.component';
import { MarcasComponent } from "./marcas/marcas.component";
import NuesAdnComponent from './nues-adn/nues-adn.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    SobreNosotrosComponent,
    InicioBannerComponent,
    ContactoComponent,
    BannerParallaxComponent,
    ServiciosComponent,
    ProyectosComponent,
    MarcasComponent,
    NuesAdnComponent
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InicioComponent {
  
}