import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioBannerComponent } from './inicio-banner/inicio-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioBannerComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inicio-banner';
}
