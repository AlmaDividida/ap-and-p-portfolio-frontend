import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NosotrosComponent } from './inicio/nosotros/nosotros.component';
import { NuesAdnComponent } from "./inicio/nues-adn/nues-adn.component";
import { FooterComponent } from "./inicio/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NosotrosComponent, NuesAdnComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
