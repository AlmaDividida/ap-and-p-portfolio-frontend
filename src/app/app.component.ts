import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { NuesAdnComponent } from "./home/nues-adn/nues-adn.component";
import { FooterComponent } from "./home/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NosotrosComponent, NuesAdnComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ap-and-p-portfolio-frontend';
}
