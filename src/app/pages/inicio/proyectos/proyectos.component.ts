import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Proyecto } from '../../../models/Proyecto';
import { proyectos } from './proyectos.list';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProyectosComponent {
  proyectos: Proyecto[] = proyectos;
  categorias = [
    {
      id: 1,
      nombre: 'Ver Todos',
      descripcion: 'Ver Todos'
    },
    {
      id: 2,
      nombre: 'Web',
      descripcion: 'Proyectos web'
    },
    {
      id: 3,
      nombre: 'Diseño',
      descripcion: 'Proyectos UI/UX'
    }
  ];
  selected: any;
  constructor() {
    this.selected = this.categorias[0];
  }

  filtrarPorCategoria(categoria: any) {
    this.selected = categoria;
    if (categoria.nombre === 'Ver Todos') {
      this.proyectos = proyectos;
    } else {
      this.proyectos = proyectos.filter(proyecto => proyecto.categoria == categoria.nombre);
    }
  }
}
