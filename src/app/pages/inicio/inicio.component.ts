import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { SobreNosotrosComponent } from "./sobre-nosotros/sobre-nosotros.component";
import { InicioBannerComponent } from './inicio-banner/inicio-banner.component';
import { FooterComponent } from "./footer/footer.component";
import { DarkModeService } from '../../services/dark-mode.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { BannerParallaxComponent } from "../../shared/banner-parallax/banner-parallax.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SobreNosotrosComponent,
    InicioBannerComponent,
    FooterComponent,
    BannerParallaxComponent
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InicioComponent {
  hasScroll: boolean;

  constructor(
    protected darkModeService: DarkModeService,
  ) {
    this.hasScroll = false;
  }

  @HostListener("window:scroll", ["$event"])

  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos == max )   {
      this.hasScroll = false;
    } else {
      this.hasScroll = true;
    }
  }

  getDarkMode() {
    return this.darkModeService.getDarkMode();
  }
}