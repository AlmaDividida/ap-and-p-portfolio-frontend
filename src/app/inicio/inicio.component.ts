import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { NuesAdnComponent } from "./nues-adn/nues-adn.component";
import { InicioBannerComponent } from './inicio-banner/inicio-banner.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NosotrosComponent,
    NuesAdnComponent,
    InicioBannerComponent,
    FooterComponent
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InicioComponent { }
