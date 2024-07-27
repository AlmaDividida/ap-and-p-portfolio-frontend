import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { NuesAdnComponent } from "./home/nues-adn/nues-adn.component";
import { FooterComponent } from "./home/footer/footer.component";
import { InicioBannerComponent } from './inicio-banner/inicio-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NosotrosComponent, NuesAdnComponent, FooterComponent, InicioBannerComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inicio-banner';
}
