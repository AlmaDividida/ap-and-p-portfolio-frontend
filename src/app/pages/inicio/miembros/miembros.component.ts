import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MiembrosService } from '../../../services/miembros.service';
import { DarkModeService } from '../../../services/dark-mode.service';

interface Miembro {
  id: number;
  nombre: string;
  apodo: string;
  puesto: string;
  descripcion: string;
  imagen: string;
  video: string;
}

@Component({
  selector: 'app-miembros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiembrosComponent implements AfterViewInit {
  @ViewChild('videoM') videoM!: ElementRef;
  miembrosLista: Miembro[] = [];
  miembroSeleccionado: Miembro | null = null;
  cargandoDatos: boolean = true; // Variable para indicar si los datos se están cargando

  constructor(protected service: MiembrosService, protected darkModeService: DarkModeService) {
    service.listar().subscribe({
      next: (respuesta: Miembro[]) => {
        console.log(respuesta);
        this.miembrosLista = respuesta;
        if (this.miembrosLista.length > 0) {
          this.miembroSeleccionado = this.miembrosLista[0];
        }
        this.cargandoDatos = false; // Los datos se han cargado
      },
      error: (error) => {
        console.error('Error al cargar los miembros:', error);
        this.cargandoDatos = false; // Hubo un error, pero la carga ha terminado
        // Mostrar un mensaje de error al usuario
      }
    });
  }

  ngAfterViewInit() {
    // ... (código anterior para manejar eventos del video, 
    // pero solo si this.miembroSeleccionado tiene un valor)
  }

  seleccionarMiembro(miembro: Miembro) {
    this.miembroSeleccionado = miembro;
    this.cargarVideo(miembro.video); 
    console.log("Miembro seleccionado:", miembro); 
  }

  cargarVideo(videoUrl: string) {
    if (this.videoM) {
      const videoElement = this.videoM.nativeElement as HTMLVideoElement;
      console.log("El método cargarVideo ha sido llamado con la URL del video:", videoUrl);

      try {
        videoElement.src = videoUrl;
        videoElement.load();
        videoElement.play();
      } catch (error) {
        console.error('Error al reproducir el video:', error);
        // ... (lógica para mostrar el mensaje de error al usuario)
      }
    }
  }
  trackByMiembroId(index: number, miembro: Miembro) {
    return miembro.id; 
  }

  carruselOffset = 0;

  moverDerecha() {
    const visibleWidth = this.calcularCarruselVisible();
  
    // Nuevo cálculo basado en el ancho total del carrusel
    if (this.carruselOffset + visibleWidth < this.calcularAnchoTotalCarrusel()) {
      this.carruselOffset += visibleWidth;
    } else {
      this.carruselOffset = 0; // Reinicia al principio si llegamos al final
    }
  
    this.aplicarTransform();
  }
  
  moverIzquierda() {
    const visibleWidth = this.calcularCarruselVisible();
  
    // cálculo basado en el ancho total del carrusel
    if (this.carruselOffset - visibleWidth >= 0) {
      this.carruselOffset -= visibleWidth;
    } else {
      this.carruselOffset = this.calcularAnchoTotalCarrusel() - visibleWidth; // Mueve al final
    }
  
    this.aplicarTransform();
  }
  
  calcularAnchoTotalCarrusel(): number {
    const carrusel = document.querySelector('.carrusel') as HTMLElement;
    return carrusel.scrollWidth; // Retorna el ancho total real del contenido del carrusel
  }
  
  aplicarTransform() {
    const carrusel = document.querySelector('.carrusel') as HTMLElement;
    carrusel.style.transform = `translateX(-${this.carruselOffset}px)`;
  }
  
  calcularCarruselVisible(): number {
    const carruselWrapper = document.querySelector('.carrusel-wrapper') as HTMLElement;
    return carruselWrapper.offsetWidth;
  }
  

 //modo oscuro
  getColorClass() {
    return this.darkModeService.getDarkMode() ? 'color-dark' : 'color-light';
  }

}