import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200, // Duración de la animación en milisegundos
  easing: 'ease-in-out', // Efecto de la animación
  once: true, // Ejecutar la animación solo una vez
  mirror: true // Repetir la animación cuando se vuelve a hacer scroll hacia arriba
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
