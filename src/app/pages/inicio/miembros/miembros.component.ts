import { CommonModule } from '@angular/common';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MiembrosService } from '../../../services/miembros.service';

@Component({
  selector: 'app-miembros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiembrosComponent { 

  miembrosLista?: any[];

  constructor(protected service: MiembrosService){

    service.listar().subscribe((respuesta)=>{console.log(respuesta)

      this.miembrosLista=respuesta;
    }); //funion anonima y funciones punta e flecha

    

  }
}
